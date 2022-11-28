package operations

import (
	"openapi/pkg/models/shared"
)

type GetSSHKeysQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetSSHKeysSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetSSHKeys200ApplicationJSON struct {
	Data    []shared.SSHKey `json:"data,omitempty"`
	Page    *int64          `json:"page,omitempty"`
	Pages   *int64          `json:"pages,omitempty"`
	Results *int64          `json:"results,omitempty"`
}

type GetSSHKeysDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetSSHKeysRequest struct {
	QueryParams GetSSHKeysQueryParams
	Security    GetSSHKeysSecurity
}

type GetSSHKeysResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetSSHKeys200ApplicationJSONObject     *GetSSHKeys200ApplicationJSON
	GetSSHKeysDefaultApplicationJSONObject *GetSSHKeysDefaultApplicationJSON
}
