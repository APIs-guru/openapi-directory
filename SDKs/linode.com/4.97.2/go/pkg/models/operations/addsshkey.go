package operations

import (
	"openapi/pkg/models/shared"
)

type AddSSHKeySecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type AddSSHKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type AddSSHKeyRequest struct {
	Request  *shared.SSHKeyRequest `request:"mediaType=application/json"`
	Security AddSSHKeySecurity
}

type AddSSHKeyResponse struct {
	ContentType                           string
	SSHKey                                *shared.SSHKey
	StatusCode                            int64
	AddSSHKeyDefaultApplicationJSONObject *AddSSHKeyDefaultApplicationJSON
}
