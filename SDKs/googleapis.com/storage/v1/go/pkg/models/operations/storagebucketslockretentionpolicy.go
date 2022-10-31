package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsLockRetentionPolicyPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageBucketsLockRetentionPolicyQueryParams struct {
	Alt                   *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields                *string         `queryParam:"style=form,explode=true,name=fields"`
	IfMetagenerationMatch string          `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
	Key                   *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken            *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint           *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser             *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType            *string         `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                *string         `queryParam:"style=form,explode=true,name=userIp"`
	UserProject           *string         `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageBucketsLockRetentionPolicySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsLockRetentionPolicySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsLockRetentionPolicySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsLockRetentionPolicySecurity struct {
	Option1 *StorageBucketsLockRetentionPolicySecurityOption1 `security:"option"`
	Option2 *StorageBucketsLockRetentionPolicySecurityOption2 `security:"option"`
	Option3 *StorageBucketsLockRetentionPolicySecurityOption3 `security:"option"`
}

type StorageBucketsLockRetentionPolicyRequest struct {
	PathParams  StorageBucketsLockRetentionPolicyPathParams
	QueryParams StorageBucketsLockRetentionPolicyQueryParams
	Security    StorageBucketsLockRetentionPolicySecurity
}

type StorageBucketsLockRetentionPolicyResponse struct {
	Bucket      *shared.Bucket
	ContentType string
	StatusCode  int64
}
