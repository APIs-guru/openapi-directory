package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsInsertProjectionEnum string

const (
	StorageBucketsInsertProjectionEnumFull  StorageBucketsInsertProjectionEnum = "full"
	StorageBucketsInsertProjectionEnumNoACL StorageBucketsInsertProjectionEnum = "noAcl"
)

type StorageBucketsInsertQueryParams struct {
	Alt         *shared.AltEnum                     `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string                             `queryParam:"style=form,explode=true,name=fields"`
	Key         *string                             `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	Project     string                              `queryParam:"style=form,explode=true,name=project"`
	Projection  *StorageBucketsInsertProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser   *string                             `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string                             `queryParam:"style=form,explode=true,name=userIp"`
}

type StorageBucketsInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsInsertSecurity struct {
	Option1 *StorageBucketsInsertSecurityOption1 `security:"option"`
	Option2 *StorageBucketsInsertSecurityOption2 `security:"option"`
}

type StorageBucketsInsertRequest struct {
	QueryParams StorageBucketsInsertQueryParams
	Request     *shared.Bucket `request:"mediaType=application/json"`
	Security    StorageBucketsInsertSecurity
}

type StorageBucketsInsertResponse struct {
	Bucket      *shared.Bucket
	ContentType string
	StatusCode  int64
}
