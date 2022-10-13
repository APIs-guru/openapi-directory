package operations

import (
	"openapi/pkg/models/shared"
)

var CancelObjectStorageServers = []string{
	"https://api.linode.com/v4",
}

type CancelObjectStorageSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CancelObjectStorageSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CancelObjectStorageSecurity struct {
	Option1 *CancelObjectStorageSecurityOption1 `security:"option"`
	Option2 *CancelObjectStorageSecurityOption2 `security:"option"`
}

type CancelObjectStorageRequest struct {
	ServerURL *string
	Security  CancelObjectStorageSecurity
}

type CancelObjectStorageDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type CancelObjectStorageResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CancelObjectStorage200ApplicationJSONObject     map[string]interface{}
	CancelObjectStorageDefaultApplicationJSONObject *CancelObjectStorageDefaultApplicationJSON
}
