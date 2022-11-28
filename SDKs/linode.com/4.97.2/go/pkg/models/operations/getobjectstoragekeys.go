package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageKeysServerList = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageKeysSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetObjectStorageKeys200ApplicationJSON struct {
	Data    []shared.ObjectStorageKey `json:"data,omitempty"`
	Page    *int64                    `json:"page,omitempty"`
	Pages   *int64                    `json:"pages,omitempty"`
	Results *int64                    `json:"results,omitempty"`
}

type GetObjectStorageKeysDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageKeysRequest struct {
	ServerURL *string
	Security  GetObjectStorageKeysSecurity
}

type GetObjectStorageKeysResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	GetObjectStorageKeys200ApplicationJSONObject     *GetObjectStorageKeys200ApplicationJSON
	GetObjectStorageKeysDefaultApplicationJSONObject *GetObjectStorageKeysDefaultApplicationJSON
}
