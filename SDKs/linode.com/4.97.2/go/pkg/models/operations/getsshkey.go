package operations

import (
	"openapi/pkg/models/shared"
)

type GetSSHKeyPathParams struct {
	SSHKeyID int64 `pathParam:"style=simple,explode=false,name=sshKeyId"`
}

type GetSSHKeySecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetSSHKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetSSHKeyRequest struct {
	PathParams GetSSHKeyPathParams
	Security   GetSSHKeySecurity
}

type GetSSHKeyResponse struct {
	ContentType                           string
	SSHKey                                *shared.SSHKey
	StatusCode                            int64
	GetSSHKeyDefaultApplicationJSONObject *GetSSHKeyDefaultApplicationJSON
}
