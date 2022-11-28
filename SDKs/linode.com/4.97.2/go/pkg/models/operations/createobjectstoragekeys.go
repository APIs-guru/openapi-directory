package operations

import (
	"openapi/pkg/models/shared"
)

var CreateObjectStorageKeysServerList = []string{
	"https://api.linode.com/v4",
}

type CreateObjectStorageKeysSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateObjectStorageKeysDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateObjectStorageKeysRequest struct {
	ServerURL *string
	Request   *shared.ObjectStorageKeyInput `request:"mediaType=application/json"`
	Security  CreateObjectStorageKeysSecurity
}

type CreateObjectStorageKeysResponse struct {
	ContentType                                         string
	ObjectStorageKey                                    *shared.ObjectStorageKey
	StatusCode                                          int64
	CreateObjectStorageKeysDefaultApplicationJSONObject *CreateObjectStorageKeysDefaultApplicationJSON
}
