package operations

import (
	"openapi/pkg/models/shared"
)

var CreateObjectStorageSslServerList = []string{
	"https://api.linode.com/v4",
}

type CreateObjectStorageSslPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type CreateObjectStorageSslSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateObjectStorageSslDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateObjectStorageSslRequest struct {
	ServerURL  *string
	PathParams CreateObjectStorageSslPathParams
	Request    *shared.ObjectStorageSsl `request:"mediaType=application/json"`
	Security   CreateObjectStorageSslSecurity
}

type CreateObjectStorageSslResponse struct {
	ContentType                                        string
	ObjectStorageSslResponse                           *shared.ObjectStorageSslResponse
	StatusCode                                         int64
	CreateObjectStorageSslDefaultApplicationJSONObject *CreateObjectStorageSslDefaultApplicationJSON
}
