package operations

import (
	"openapi/pkg/models/shared"
)

var CreateObjectStorageBucketServerList = []string{
	"https://api.linode.com/v4",
}

type CreateObjectStorageBucketRequestBodyACLEnum string

const (
	CreateObjectStorageBucketRequestBodyACLEnumPrivate           CreateObjectStorageBucketRequestBodyACLEnum = "private"
	CreateObjectStorageBucketRequestBodyACLEnumPublicRead        CreateObjectStorageBucketRequestBodyACLEnum = "public-read"
	CreateObjectStorageBucketRequestBodyACLEnumAuthenticatedRead CreateObjectStorageBucketRequestBodyACLEnum = "authenticated-read"
	CreateObjectStorageBucketRequestBodyACLEnumPublicReadWrite   CreateObjectStorageBucketRequestBodyACLEnum = "public-read-write"
)

type CreateObjectStorageBucketRequestBody struct {
	ACL         *CreateObjectStorageBucketRequestBodyACLEnum `json:"acl,omitempty"`
	Cluster     string                                       `json:"cluster"`
	CorsEnabled *bool                                        `json:"cors_enabled,omitempty"`
	Label       string                                       `json:"label"`
}

type CreateObjectStorageBucketSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type CreateObjectStorageBucketDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type CreateObjectStorageBucketRequest struct {
	ServerURL *string
	Request   *CreateObjectStorageBucketRequestBody `request:"mediaType=application/json"`
	Security  CreateObjectStorageBucketSecurity
}

type CreateObjectStorageBucketResponse struct {
	ContentType                                           string
	ObjectStorageBucket                                   *shared.ObjectStorageBucket
	StatusCode                                            int64
	CreateObjectStorageBucketDefaultApplicationJSONObject *CreateObjectStorageBucketDefaultApplicationJSON
}
