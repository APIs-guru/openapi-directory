package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeInstancesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLinodeInstancesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetLinodeInstancesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetLinodeInstancesSecurity struct {
	Option1 *GetLinodeInstancesSecurityOption1 `security:"option"`
	Option2 *GetLinodeInstancesSecurityOption2 `security:"option"`
}

type GetLinodeInstancesRequest struct {
	QueryParams GetLinodeInstancesQueryParams
	Security    GetLinodeInstancesSecurity
}

type GetLinodeInstances200ApplicationJSON struct {
	Data    []shared.Linode `json:"data"`
	Page    *int64          `json:"page"`
	Pages   *int64          `json:"pages"`
	Results *int64          `json:"results"`
}

type GetLinodeInstancesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetLinodeInstancesResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetLinodeInstances200ApplicationJSONObject     *GetLinodeInstances200ApplicationJSON
	GetLinodeInstancesDefaultApplicationJSONObject *GetLinodeInstancesDefaultApplicationJSON
}
