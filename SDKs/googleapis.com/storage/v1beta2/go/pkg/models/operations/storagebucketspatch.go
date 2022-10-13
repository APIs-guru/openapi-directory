package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsPatchPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageBucketsPatchProjectionEnum string

const (
	StorageBucketsPatchProjectionEnumFull  StorageBucketsPatchProjectionEnum = "full"
	StorageBucketsPatchProjectionEnumNoACL StorageBucketsPatchProjectionEnum = "noAcl"
)

type StorageBucketsPatchQueryParams struct {
	Alt                      *shared.AltEnum                    `queryParam:"style=form,explode=true,name=alt"`
	Fields                   *string                            `queryParam:"style=form,explode=true,name=fields"`
	IfMetagenerationMatch    *string                            `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
	IfMetagenerationNotMatch *string                            `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
	Key                      *string                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken               *string                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint              *bool                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection               *StorageBucketsPatchProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                *string                            `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP                   *string                            `queryParam:"style=form,explode=true,name=userIp"`
}

type StorageBucketsPatchSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsPatchSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsPatchSecurity struct {
	Option1 *StorageBucketsPatchSecurityOption1 `security:"option"`
	Option2 *StorageBucketsPatchSecurityOption2 `security:"option"`
}

type StorageBucketsPatchRequest struct {
	PathParams  StorageBucketsPatchPathParams
	QueryParams StorageBucketsPatchQueryParams
	Request     *shared.Bucket `request:"mediaType=application/json"`
	Security    StorageBucketsPatchSecurity
}

type StorageBucketsPatchResponse struct {
	Bucket      *shared.Bucket
	ContentType string
	StatusCode  int64
}
