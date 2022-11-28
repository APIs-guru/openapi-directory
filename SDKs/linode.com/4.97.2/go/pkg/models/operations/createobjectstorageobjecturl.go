package operations

import (
	"openapi/pkg/models/shared"
)

var CreateObjectStorageObjectURLServerList = []string{
	"https://api.linode.com/v4",
}

type CreateObjectStorageObjectURLPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type CreateObjectStorageObjectURLSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateObjectStorageObjectURLDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateObjectStorageObjectURLRequest struct {
	ServerURL  *string
	PathParams CreateObjectStorageObjectURLPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   CreateObjectStorageObjectURLSecurity
}

type CreateObjectStorageObjectURLResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	CreateObjectStorageObjectURL200ApplicationJSONAny        *interface{}
	CreateObjectStorageObjectURLDefaultApplicationJSONObject *CreateObjectStorageObjectURLDefaultApplicationJSON
}
