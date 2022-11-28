package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageTransferServerList = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageTransferSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetObjectStorageTransferDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageTransferRequest struct {
	ServerURL *string
	Security  GetObjectStorageTransferSecurity
}

type GetObjectStorageTransferResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	GetObjectStorageTransfer200ApplicationJSONAny        *interface{}
	GetObjectStorageTransferDefaultApplicationJSONObject *GetObjectStorageTransferDefaultApplicationJSON
}
