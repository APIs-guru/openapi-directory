package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteObjectStorageSslServerList = []string{
	"https://api.linode.com/v4",
}

type DeleteObjectStorageSslPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type DeleteObjectStorageSslSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type DeleteObjectStorageSslDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type DeleteObjectStorageSslRequest struct {
	ServerURL  *string
	PathParams DeleteObjectStorageSslPathParams
	Security   DeleteObjectStorageSslSecurity
}

type DeleteObjectStorageSslResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	DeleteObjectStorageSsl200ApplicationJSONObject     map[string]interface{}
	DeleteObjectStorageSslDefaultApplicationJSONObject *DeleteObjectStorageSslDefaultApplicationJSON
}
