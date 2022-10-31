package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateObjectStorageBucketACLServers = []string{
	"https://api.linode.com/v4",
}

type UpdateObjectStorageBucketACLPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type UpdateObjectStorageBucketACLSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type UpdateObjectStorageBucketACLSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdateObjectStorageBucketACLSecurity struct {
	Option1 *UpdateObjectStorageBucketACLSecurityOption1 `security:"option"`
	Option2 *UpdateObjectStorageBucketACLSecurityOption2 `security:"option"`
}

type UpdateObjectStorageBucketACLRequest struct {
	ServerURL  *string
	PathParams UpdateObjectStorageBucketACLPathParams
	Request    *interface{} `request:"mediaType=application/json"`
	Security   UpdateObjectStorageBucketACLSecurity
}

type UpdateObjectStorageBucketACL200ApplicationJSONACLEnum string

const (
	UpdateObjectStorageBucketACL200ApplicationJSONACLEnumPrivate           UpdateObjectStorageBucketACL200ApplicationJSONACLEnum = "private"
	UpdateObjectStorageBucketACL200ApplicationJSONACLEnumPublicRead        UpdateObjectStorageBucketACL200ApplicationJSONACLEnum = "public-read"
	UpdateObjectStorageBucketACL200ApplicationJSONACLEnumAuthenticatedRead UpdateObjectStorageBucketACL200ApplicationJSONACLEnum = "authenticated-read"
	UpdateObjectStorageBucketACL200ApplicationJSONACLEnumPublicReadWrite   UpdateObjectStorageBucketACL200ApplicationJSONACLEnum = "public-read-write"
	UpdateObjectStorageBucketACL200ApplicationJSONACLEnumCustom            UpdateObjectStorageBucketACL200ApplicationJSONACLEnum = "custom"
)

type UpdateObjectStorageBucketACL200ApplicationJSON struct {
	ACL    *UpdateObjectStorageBucketACL200ApplicationJSONACLEnum `json:"acl,omitempty"`
	ACLXML *string                                                `json:"acl_xml,omitempty"`
}

type UpdateObjectStorageBucketACLDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type UpdateObjectStorageBucketACLResponse struct {
	ContentType                                              string
	StatusCode                                               int64
	UpdateObjectStorageBucketACL200ApplicationJSONObject     *UpdateObjectStorageBucketACL200ApplicationJSON
	UpdateObjectStorageBucketACLDefaultApplicationJSONObject *UpdateObjectStorageBucketACLDefaultApplicationJSON
}
