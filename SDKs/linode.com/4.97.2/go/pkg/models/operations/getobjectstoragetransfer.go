package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageTransferServers = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageTransferSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetObjectStorageTransferSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetObjectStorageTransferSecurity struct {
	Option1 *GetObjectStorageTransferSecurityOption1 `security:"option"`
	Option2 *GetObjectStorageTransferSecurityOption2 `security:"option"`
}

type GetObjectStorageTransferRequest struct {
	ServerURL *string
	Security  GetObjectStorageTransferSecurity
}

type GetObjectStorageTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageTransferResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetObjectStorageTransfer200ApplicationJSONAny        *interface{}
	GetObjectStorageTransferDefaultApplicationJSONObject *GetObjectStorageTransferDefaultApplicationJSON
}
