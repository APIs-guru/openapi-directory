package operations

import (
	"openapi/pkg/models/shared"
)

var CreateObjectStorageObjectURLServers = []string{
	"https://api.linode.com/v4",
}

type CreateObjectStorageObjectURLPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type CreateObjectStorageObjectURLSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateObjectStorageObjectURLSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateObjectStorageObjectURLSecurity struct {
	Option1 *CreateObjectStorageObjectURLSecurityOption1 `security:"option"`
	Option2 *CreateObjectStorageObjectURLSecurityOption2 `security:"option"`
}

type CreateObjectStorageObjectURLRequest struct {
	ServerURL  *string
	PathParams CreateObjectStorageObjectURLPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   CreateObjectStorageObjectURLSecurity
}

type CreateObjectStorageObjectURLDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateObjectStorageObjectURLResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	CreateObjectStorageObjectURL200ApplicationJSONAny        *interface{}
	CreateObjectStorageObjectURLDefaultApplicationJSONObject *CreateObjectStorageObjectURLDefaultApplicationJSON
}
