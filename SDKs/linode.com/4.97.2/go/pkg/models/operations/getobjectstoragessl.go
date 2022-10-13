package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageSslServers = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageSslPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type GetObjectStorageSslSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetObjectStorageSslSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetObjectStorageSslSecurity struct {
	Option1 *GetObjectStorageSslSecurityOption1 `security:"option"`
	Option2 *GetObjectStorageSslSecurityOption2 `security:"option"`
}

type GetObjectStorageSslRequest struct {
	ServerURL  *string
	PathParams GetObjectStorageSslPathParams
	Security   GetObjectStorageSslSecurity
}

type GetObjectStorageSslDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors"`
}

type GetObjectStorageSslResponse struct {
	ContentType                                     string
	ObjectStorageSslResponse                        *shared.ObjectStorageSslResponse
	StatusCode                                      int64
	GetObjectStorageSslDefaultApplicationJSONObject *GetObjectStorageSslDefaultApplicationJSON
}
