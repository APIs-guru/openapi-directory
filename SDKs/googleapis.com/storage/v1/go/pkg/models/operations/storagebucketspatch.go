package operations

import (
	"openapi/pkg/models/shared"
)

type StorageBucketsPatchPathParams struct {
	Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
}

type StorageBucketsPatchPredefinedACLEnum string

const (
	StorageBucketsPatchPredefinedACLEnumAuthenticatedRead StorageBucketsPatchPredefinedACLEnum = "authenticatedRead"
	StorageBucketsPatchPredefinedACLEnumPrivate           StorageBucketsPatchPredefinedACLEnum = "private"
	StorageBucketsPatchPredefinedACLEnumProjectPrivate    StorageBucketsPatchPredefinedACLEnum = "projectPrivate"
	StorageBucketsPatchPredefinedACLEnumPublicRead        StorageBucketsPatchPredefinedACLEnum = "publicRead"
	StorageBucketsPatchPredefinedACLEnumPublicReadWrite   StorageBucketsPatchPredefinedACLEnum = "publicReadWrite"
)

type StorageBucketsPatchPredefinedDefaultObjectACLEnum string

const (
	StorageBucketsPatchPredefinedDefaultObjectACLEnumAuthenticatedRead      StorageBucketsPatchPredefinedDefaultObjectACLEnum = "authenticatedRead"
	StorageBucketsPatchPredefinedDefaultObjectACLEnumBucketOwnerFullControl StorageBucketsPatchPredefinedDefaultObjectACLEnum = "bucketOwnerFullControl"
	StorageBucketsPatchPredefinedDefaultObjectACLEnumBucketOwnerRead        StorageBucketsPatchPredefinedDefaultObjectACLEnum = "bucketOwnerRead"
	StorageBucketsPatchPredefinedDefaultObjectACLEnumPrivate                StorageBucketsPatchPredefinedDefaultObjectACLEnum = "private"
	StorageBucketsPatchPredefinedDefaultObjectACLEnumProjectPrivate         StorageBucketsPatchPredefinedDefaultObjectACLEnum = "projectPrivate"
	StorageBucketsPatchPredefinedDefaultObjectACLEnumPublicRead             StorageBucketsPatchPredefinedDefaultObjectACLEnum = "publicRead"
)

type StorageBucketsPatchProjectionEnum string

const (
	StorageBucketsPatchProjectionEnumFull  StorageBucketsPatchProjectionEnum = "full"
	StorageBucketsPatchProjectionEnumNoACL StorageBucketsPatchProjectionEnum = "noAcl"
)

type StorageBucketsPatchQueryParams struct {
	Alt                        *shared.AltEnum                                    `queryParam:"style=form,explode=true,name=alt"`
	Fields                     *string                                            `queryParam:"style=form,explode=true,name=fields"`
	IfMetagenerationMatch      *string                                            `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
	IfMetagenerationNotMatch   *string                                            `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
	Key                        *string                                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken                 *string                                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PredefinedACL              *StorageBucketsPatchPredefinedACLEnum              `queryParam:"style=form,explode=true,name=predefinedAcl"`
	PredefinedDefaultObjectACL *StorageBucketsPatchPredefinedDefaultObjectACLEnum `queryParam:"style=form,explode=true,name=predefinedDefaultObjectAcl"`
	PrettyPrint                *bool                                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection                 *StorageBucketsPatchProjectionEnum                 `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                  *string                                            `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                 *string                                            `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                     *string                                            `queryParam:"style=form,explode=true,name=userIp"`
	UserProject                *string                                            `queryParam:"style=form,explode=true,name=userProject"`
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
