package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSSHKeyPathParams struct {
	SSHKeyID int64 `pathParam:"style=simple,explode=false,name=sshKeyId"`
}

type DeleteSSHKeySecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type DeleteSSHKeySecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type DeleteSSHKeySecurity struct {
	Option1 *DeleteSSHKeySecurityOption1 `security:"option"`
	Option2 *DeleteSSHKeySecurityOption2 `security:"option"`
}

type DeleteSSHKeyRequest struct {
	PathParams DeleteSSHKeyPathParams
	Security   DeleteSSHKeySecurity
}

type DeleteSSHKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteSSHKeyResponse struct {
	ContentType                              string
	StatusCode                               int64
	DeleteSSHKey200ApplicationJSONObject     map[string]interface{}
	DeleteSSHKeyDefaultApplicationJSONObject *DeleteSSHKeyDefaultApplicationJSON
}
