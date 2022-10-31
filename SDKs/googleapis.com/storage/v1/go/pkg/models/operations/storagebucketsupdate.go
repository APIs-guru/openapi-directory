package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsUpdatePathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageBucketsUpdatePredefinedACLEnum string

const (
	StorageBucketsUpdatePredefinedACLEnumAuthenticatedRead StorageBucketsUpdatePredefinedACLEnum = "authenticatedRead"
	StorageBucketsUpdatePredefinedACLEnumPrivate           StorageBucketsUpdatePredefinedACLEnum = "private"
	StorageBucketsUpdatePredefinedACLEnumProjectPrivate    StorageBucketsUpdatePredefinedACLEnum = "projectPrivate"
	StorageBucketsUpdatePredefinedACLEnumPublicRead        StorageBucketsUpdatePredefinedACLEnum = "publicRead"
	StorageBucketsUpdatePredefinedACLEnumPublicReadWrite   StorageBucketsUpdatePredefinedACLEnum = "publicReadWrite"
)

type StorageBucketsUpdatePredefinedDefaultObjectACLEnum string

const (
	StorageBucketsUpdatePredefinedDefaultObjectACLEnumAuthenticatedRead      StorageBucketsUpdatePredefinedDefaultObjectACLEnum = "authenticatedRead"
	StorageBucketsUpdatePredefinedDefaultObjectACLEnumBucketOwnerFullControl StorageBucketsUpdatePredefinedDefaultObjectACLEnum = "bucketOwnerFullControl"
	StorageBucketsUpdatePredefinedDefaultObjectACLEnumBucketOwnerRead        StorageBucketsUpdatePredefinedDefaultObjectACLEnum = "bucketOwnerRead"
	StorageBucketsUpdatePredefinedDefaultObjectACLEnumPrivate                StorageBucketsUpdatePredefinedDefaultObjectACLEnum = "private"
	StorageBucketsUpdatePredefinedDefaultObjectACLEnumProjectPrivate         StorageBucketsUpdatePredefinedDefaultObjectACLEnum = "projectPrivate"
	StorageBucketsUpdatePredefinedDefaultObjectACLEnumPublicRead             StorageBucketsUpdatePredefinedDefaultObjectACLEnum = "publicRead"
)

type StorageBucketsUpdateProjectionEnum string

const (
	StorageBucketsUpdateProjectionEnumFull  StorageBucketsUpdateProjectionEnum = "full"
	StorageBucketsUpdateProjectionEnumNoACL StorageBucketsUpdateProjectionEnum = "noAcl"
)

type StorageBucketsUpdateQueryParams struct {
	Alt                        *shared.AltEnum                                     `queryParam:"style=form,explode=true,name=alt"`
	Fields                     *string                                             `queryParam:"style=form,explode=true,name=fields"`
	IfMetagenerationMatch      *string                                             `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
	IfMetagenerationNotMatch   *string                                             `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
	Key                        *string                                             `queryParam:"style=form,explode=true,name=key"`
	OauthToken                 *string                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PredefinedACL              *StorageBucketsUpdatePredefinedACLEnum              `queryParam:"style=form,explode=true,name=predefinedAcl"`
	PredefinedDefaultObjectACL *StorageBucketsUpdatePredefinedDefaultObjectACLEnum `queryParam:"style=form,explode=true,name=predefinedDefaultObjectAcl"`
	PrettyPrint                *bool                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection                 *StorageBucketsUpdateProjectionEnum                 `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                  *string                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                 *string                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                     *string                                             `queryParam:"style=form,explode=true,name=userIp"`
	UserProject                *string                                             `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageBucketsUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageBucketsUpdateSecurity struct {
	Option1 *StorageBucketsUpdateSecurityOption1 `security:"option"`
	Option2 *StorageBucketsUpdateSecurityOption2 `security:"option"`
}

type StorageBucketsUpdateRequest struct {
	PathParams  StorageBucketsUpdatePathParams
	QueryParams StorageBucketsUpdateQueryParams
	Request     *shared.Bucket `request:"mediaType=application/json"`
	Security    StorageBucketsUpdateSecurity
}

type StorageBucketsUpdateResponse struct {
	Bucket      *shared.Bucket
	ContentType string
	StatusCode  int64
}
