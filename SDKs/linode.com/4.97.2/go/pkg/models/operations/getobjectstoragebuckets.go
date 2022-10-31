package operations

import (
	"openapi/pkg/models/shared"
)

var GetObjectStorageBucketsServers = []string{
	"https://api.linode.com/v4",
}

type GetObjectStorageBucketsSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetObjectStorageBucketsSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetObjectStorageBucketsSecurity struct {
	Option1 *GetObjectStorageBucketsSecurityOption1 `security:"option"`
	Option2 *GetObjectStorageBucketsSecurityOption2 `security:"option"`
}

type GetObjectStorageBucketsRequest struct {
	ServerURL *string
	Security  GetObjectStorageBucketsSecurity
}

type GetObjectStorageBuckets200ApplicationJSON struct {
	Data    []shared.ObjectStorageBucket `json:"data,omitempty"`
	Page    *int64                       `json:"page,omitempty"`
	Pages   *int64                       `json:"pages,omitempty"`
	Results *int64                       `json:"results,omitempty"`
}

type GetObjectStorageBucketsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetObjectStorageBucketsResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetObjectStorageBuckets200ApplicationJSONObject     *GetObjectStorageBuckets200ApplicationJSON
	GetObjectStorageBucketsDefaultApplicationJSONObject *GetObjectStorageBucketsDefaultApplicationJSON
}
