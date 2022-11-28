package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageSslServerList = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageSslPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetObjectStorageSslSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetObjectStorageSslDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageSslRequest struct {
	ServerURL  *string
	PathParams GetObjectStorageSslPathParams
	Security   GetObjectStorageSslSecurity
}

type GetObjectStorageSslResponse struct {
	ContentType                                     string
	ObjectStorageSslResponse                        *shared.ObjectStorageSslResponse
	StatusCode                                      int64
	GetObjectStorageSslDefaultApplicationJSONObject *GetObjectStorageSslDefaultApplicationJSON
}
