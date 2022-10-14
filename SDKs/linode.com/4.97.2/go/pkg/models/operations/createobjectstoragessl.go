package operations

import (
	"openapi/pkg/models/shared"
)

var CreateObjectStorageSslServers = []string{
	"https://api.linode.com/v4",
}

type CreateObjectStorageSslPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type CreateObjectStorageSslSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type CreateObjectStorageSslSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type CreateObjectStorageSslSecurity struct {
	Option1 *CreateObjectStorageSslSecurityOption1 `security:"option"`
	Option2 *CreateObjectStorageSslSecurityOption2 `security:"option"`
}

type CreateObjectStorageSslRequest struct {
	ServerURL  *string
	PathParams CreateObjectStorageSslPathParams
	Request    *shared.ObjectStorageSsl `request:"mediaType=application/json"`
	Security   CreateObjectStorageSslSecurity
}

type CreateObjectStorageSslDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateObjectStorageSslResponse struct {
	ContentType                                        string
	ObjectStorageSslResponse                           *shared.ObjectStorageSslResponse
	StatusCode                                         int64
	CreateObjectStorageSslDefaultApplicationJSONObject *CreateObjectStorageSslDefaultApplicationJSON
}
