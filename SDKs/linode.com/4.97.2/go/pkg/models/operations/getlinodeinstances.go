package operations

import (
	"openapi/pkg/models/shared"
)

type GetLinodeInstancesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetLinodeInstancesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetLinodeInstances200ApplicationJSON struct {
	Data    []shared.Linode `json:"data,omitempty"`
	Page    *int64          `json:"page,omitempty"`
	Pages   *int64          `json:"pages,omitempty"`
	Results *int64          `json:"results,omitempty"`
}

type GetLinodeInstancesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetLinodeInstancesRequest struct {
	QueryParams GetLinodeInstancesQueryParams
	Security    GetLinodeInstancesSecurity
}

type GetLinodeInstancesResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	GetLinodeInstances200ApplicationJSONObject     *GetLinodeInstances200ApplicationJSON
	GetLinodeInstancesDefaultApplicationJSONObject *GetLinodeInstancesDefaultApplicationJSON
}
