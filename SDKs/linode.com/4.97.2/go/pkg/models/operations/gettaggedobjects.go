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

type GetTaggedObjectsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetTaggedObjectsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetTaggedObjectsRequest struct {
	PathParams  GetTaggedObjectsPathParams
	QueryParams GetTaggedObjectsQueryParams
	Security    GetTaggedObjectsSecurity
}

type GetTaggedObjectsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetTaggedObjects200ApplicationJSONAny        *interface{}
	GetTaggedObjectsDefaultApplicationJSONObject *GetTaggedObjectsDefaultApplicationJSON
}
