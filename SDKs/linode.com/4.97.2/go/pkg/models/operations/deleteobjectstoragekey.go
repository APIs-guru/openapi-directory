package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteObjectStorageKeyServerList = []string{
	"https://api.linode.com/v4",
}

type DeleteObjectStorageKeyPathParams struct {
	KeyID int64 `pathParam:"style=simple,explode=false,name=keyId"`
}

type DeleteObjectStorageKeySecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteObjectStorageKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteObjectStorageKeyRequest struct {
	ServerURL  *string
	PathParams DeleteObjectStorageKeyPathParams
	Security   DeleteObjectStorageKeySecurity
}

type DeleteObjectStorageKeyResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	DeleteObjectStorageKey200ApplicationJSONObject     map[string]interface{}
	DeleteObjectStorageKeyDefaultApplicationJSONObject *DeleteObjectStorageKeyDefaultApplicationJSON
}
