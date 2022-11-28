package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageKeyServerList = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageKeyPathParams struct {
	KeyID int64 `pathParam:"style=simple,explode=false,name=keyId"`
}

type GetObjectStorageKeySecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetObjectStorageKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageKeyRequest struct {
	ServerURL  *string
	PathParams GetObjectStorageKeyPathParams
	Security   GetObjectStorageKeySecurity
}

type GetObjectStorageKeyResponse struct {
	ContentType                                     string
	ObjectStorageKey                                *shared.ObjectStorageKey
	StatusCode                                      int64
	GetObjectStorageKeyDefaultApplicationJSONObject *GetObjectStorageKeyDefaultApplicationJSON
}
