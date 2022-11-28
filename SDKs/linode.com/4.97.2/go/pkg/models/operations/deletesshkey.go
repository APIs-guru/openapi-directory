package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSSHKeyPathParams struct {
	SSHKeyID int64 `pathParam:"style=simple,explode=false,name=sshKeyId"`
}

type DeleteSSHKeySecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteSSHKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteSSHKeyRequest struct {
	PathParams DeleteSSHKeyPathParams
	Security   DeleteSSHKeySecurity
}

type DeleteSSHKeyResponse struct {
	ContentType                              string
	StatusCode                               int64
	DeleteSSHKey200ApplicationJSONObject     map[string]interface{}
	DeleteSSHKeyDefaultApplicationJSONObject *DeleteSSHKeyDefaultApplicationJSON
}
