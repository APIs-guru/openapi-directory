package operations

import (
	"openapi/pkg/models/shared"
)

var ViewObjectStorageBucketACLServers = []string{
	"https://api.linode.com/v4",
}

type ViewObjectStorageBucketACLPathParams struct {
	Bucket    string `pathParam:"style=simple,explode=false,name=bucket"`
	ClusterID string `pathParam:"style=simple,explode=false,name=clusterId"`
}

type ViewObjectStorageBucketACLQueryParams struct {
	Name string `queryParam:"style=form,explode=true,name=name"`
}

type ViewObjectStorageBucketACLSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type ViewObjectStorageBucketACLSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type ViewObjectStorageBucketACLSecurity struct {
	Option1 *ViewObjectStorageBucketACLSecurityOption1 `security:"option"`
	Option2 *ViewObjectStorageBucketACLSecurityOption2 `security:"option"`
}

type ViewObjectStorageBucketACLRequest struct {
	ServerURL   *string
	PathParams  ViewObjectStorageBucketACLPathParams
	QueryParams ViewObjectStorageBucketACLQueryParams
	Security    ViewObjectStorageBucketACLSecurity
}

type ViewObjectStorageBucketACL200ApplicationJSONACLEnum string

const (
	ViewObjectStorageBucketACL200ApplicationJSONACLEnumPrivate           ViewObjectStorageBucketACL200ApplicationJSONACLEnum = "private"
	ViewObjectStorageBucketACL200ApplicationJSONACLEnumPublicRead        ViewObjectStorageBucketACL200ApplicationJSONACLEnum = "public-read"
	ViewObjectStorageBucketACL200ApplicationJSONACLEnumAuthenticatedRead ViewObjectStorageBucketACL200ApplicationJSONACLEnum = "authenticated-read"
	ViewObjectStorageBucketACL200ApplicationJSONACLEnumPublicReadWrite   ViewObjectStorageBucketACL200ApplicationJSONACLEnum = "public-read-write"
	ViewObjectStorageBucketACL200ApplicationJSONACLEnumCustom            ViewObjectStorageBucketACL200ApplicationJSONACLEnum = "custom"
)

type ViewObjectStorageBucketACL200ApplicationJSON struct {
	ACL    *ViewObjectStorageBucketACL200ApplicationJSONACLEnum `json:"acl,omitempty"`
	ACLXML *string                                              `json:"acl_xml,omitempty"`
}

type ViewObjectStorageBucketACLDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type ViewObjectStorageBucketACLResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	ViewObjectStorageBucketACL200ApplicationJSONObject     *ViewObjectStorageBucketACL200ApplicationJSON
	ViewObjectStorageBucketACLDefaultApplicationJSONObject *ViewObjectStorageBucketACLDefaultApplicationJSON
}
