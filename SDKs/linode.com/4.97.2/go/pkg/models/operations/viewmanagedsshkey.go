package operations

import (
	"openapi/pkg/models/shared"
)

type ViewManagedSSHKeySecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type ViewManagedSSHKeySecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type ViewManagedSSHKeySecurity struct {
	Option1 *ViewManagedSSHKeySecurityOption1 `security:"option"`
	Option2 *ViewManagedSSHKeySecurityOption2 `security:"option"`
}

type ViewManagedSSHKeyRequest struct {
	Security ViewManagedSSHKeySecurity
}

type ViewManagedSSHKey200ApplicationJSON struct {
	SSHKey *string `json:"ssh_key,omitempty"`
}

type ViewManagedSSHKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ViewManagedSSHKeyResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	ViewManagedSSHKey200ApplicationJSONObject     *ViewManagedSSHKey200ApplicationJSON
	ViewManagedSSHKeyDefaultApplicationJSONObject *ViewManagedSSHKeyDefaultApplicationJSON
}
