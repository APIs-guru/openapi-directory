package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetUsersSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetUsers200ApplicationJSON struct {
	Data    []shared.User `json:"data,omitempty"`
	Page    *int64        `json:"page,omitempty"`
	Pages   *int64        `json:"pages,omitempty"`
	Results *int64        `json:"results,omitempty"`
}

type GetUsersDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
	Security    GetUsersSecurity
}

type GetUsersResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetUsers200ApplicationJSONObject     *GetUsers200ApplicationJSON
	GetUsersDefaultApplicationJSONObject *GetUsersDefaultApplicationJSON
}
