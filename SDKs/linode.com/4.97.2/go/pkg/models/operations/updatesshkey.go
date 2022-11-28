package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSSHKeyPathParams struct {
	SSHKeyID int64 `pathParam:"style=simple,explode=false,name=sshKeyId"`
}

type UpdateSSHKeySecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateSSHKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateSSHKeyRequest struct {
	PathParams UpdateSSHKeyPathParams
	Request    shared.SSHKeyInput `request:"mediaType=application/json"`
	Security   UpdateSSHKeySecurity
}

type UpdateSSHKeyResponse struct {
	ContentType                              string
	SSHKey                                   *shared.SSHKey
	StatusCode                               int64
	UpdateSSHKeyDefaultApplicationJSONObject *UpdateSSHKeyDefaultApplicationJSON
}
