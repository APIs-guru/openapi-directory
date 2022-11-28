package operations

import (
	"openapi/pkg/models/shared"
)

var CancelObjectStorageServerList = []string{
	"https://api.linode.com/v4",
}

type CancelObjectStorageSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CancelObjectStorageDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CancelObjectStorageRequest struct {
	ServerURL *string
	Security  CancelObjectStorageSecurity
}

type CancelObjectStorageResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CancelObjectStorage200ApplicationJSONObject     map[string]interface{}
	CancelObjectStorageDefaultApplicationJSONObject *CancelObjectStorageDefaultApplicationJSON
}
