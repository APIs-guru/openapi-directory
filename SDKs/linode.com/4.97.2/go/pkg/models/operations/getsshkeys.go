package operations

import (
	"openapi/pkg/models/shared"
)

type GetSSHKeysQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetSSHKeysSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetSSHKeysSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetSSHKeysSecurity struct {
	Option1 *GetSSHKeysSecurityOption1 `security:"option"`
	Option2 *GetSSHKeysSecurityOption2 `security:"option"`
}

type GetSSHKeysRequest struct {
	QueryParams GetSSHKeysQueryParams
	Security    GetSSHKeysSecurity
}

type GetSSHKeys200ApplicationJSON struct {
	Data    []shared.SSHKey `json:"data"`
	Page    *int64          `json:"page"`
	Pages   *int64          `json:"pages"`
	Results *int64          `json:"results"`
}

type GetSSHKeysDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetSSHKeysResponse struct {
	ContentType                            string
	StatusCode                             int64
	GetSSHKeys200ApplicationJSONObject     *GetSSHKeys200ApplicationJSON
	GetSSHKeysDefaultApplicationJSONObject *GetSSHKeysDefaultApplicationJSON
}
