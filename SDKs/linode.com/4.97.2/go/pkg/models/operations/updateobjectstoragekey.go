package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateObjectStorageKeyServerList = []string{
	"https://api.linode.com/v4",
}

type UpdateObjectStorageKeyPathParams struct {
	KeyID int64 `pathParam:"style=simple,explode=false,name=keyId"`
}

type UpdateObjectStorageKeyRequestBody struct {
	Label *string `json:"label,omitempty"`
}

type UpdateObjectStorageKeySecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type UpdateObjectStorageKeyDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateObjectStorageKeyRequest struct {
	ServerURL  *string
	PathParams UpdateObjectStorageKeyPathParams
	Request    *UpdateObjectStorageKeyRequestBody `request:"mediaType=application/json"`
	Security   UpdateObjectStorageKeySecurity
}

type UpdateObjectStorageKeyResponse struct {
	ContentType                                        string
	ObjectStorageKey                                   *shared.ObjectStorageKey
	StatusCode                                         int64
	UpdateObjectStorageKeyDefaultApplicationJSONObject *UpdateObjectStorageKeyDefaultApplicationJSON
}
