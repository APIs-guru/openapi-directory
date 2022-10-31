package operations

import (
	"openapi/pkg/models/shared"
)

type GetTaggedObjectsPathParams struct {
	Label string `pathParam:"style=simple,explode=false,name=label"`
}

type GetTaggedObjectsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetTaggedObjectsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetTaggedObjectsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetTaggedObjectsSecurity struct {
	Option1 *GetTaggedObjectsSecurityOption1 `security:"option"`
	Option2 *GetTaggedObjectsSecurityOption2 `security:"option"`
}

type GetTaggedObjectsRequest struct {
	PathParams  GetTaggedObjectsPathParams
	QueryParams GetTaggedObjectsQueryParams
	Security    GetTaggedObjectsSecurity
}

type GetTaggedObjectsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetTaggedObjectsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetTaggedObjects200ApplicationJSONAny        *interface{}
	GetTaggedObjectsDefaultApplicationJSONObject *GetTaggedObjectsDefaultApplicationJSON
}
