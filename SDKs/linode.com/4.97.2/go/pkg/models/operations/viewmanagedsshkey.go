package operations

import (
	"openapi/pkg/models/shared"
)

type ViewManagedSSHKeySecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

// ViewManagedSSHKey200ApplicationJSON
// A unique SSH public key that allows Linode's special forces to access a Managed server to respond to Issues.
type ViewManagedSSHKey200ApplicationJSON struct {
	SSHKey *string `json:"ssh_key,omitempty"`
}

type ViewManagedSSHKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ViewManagedSSHKeyRequest struct {
	Security ViewManagedSSHKeySecurity
}

type ViewManagedSSHKeyResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ViewManagedSSHKey200ApplicationJSONObject     *ViewManagedSSHKey200ApplicationJSON
	ViewManagedSSHKeyDefaultApplicationJSONObject *ViewManagedSSHKeyDefaultApplicationJSON
}
