package operations

import (
	"openapi/pkg/models/shared"
)

type StorageObjectsRewritePathParams struct {
	DestinationBucket string `pathParam:"style=simple,explode=false,name=destinationBucket"`
	DestinationObject string `pathParam:"style=simple,explode=false,name=destinationObject"`
	SourceBucket      string `pathParam:"style=simple,explode=false,name=sourceBucket"`
	SourceObject      string `pathParam:"style=simple,explode=false,name=sourceObject"`
}

type StorageObjectsRewriteDestinationPredefinedACLEnum string

const (
	StorageObjectsRewriteDestinationPredefinedACLEnumAuthenticatedRead      StorageObjectsRewriteDestinationPredefinedACLEnum = "authenticatedRead"
	StorageObjectsRewriteDestinationPredefinedACLEnumBucketOwnerFullControl StorageObjectsRewriteDestinationPredefinedACLEnum = "bucketOwnerFullControl"
	StorageObjectsRewriteDestinationPredefinedACLEnumBucketOwnerRead        StorageObjectsRewriteDestinationPredefinedACLEnum = "bucketOwnerRead"
	StorageObjectsRewriteDestinationPredefinedACLEnumPrivate                StorageObjectsRewriteDestinationPredefinedACLEnum = "private"
	StorageObjectsRewriteDestinationPredefinedACLEnumProjectPrivate         StorageObjectsRewriteDestinationPredefinedACLEnum = "projectPrivate"
	StorageObjectsRewriteDestinationPredefinedACLEnumPublicRead             StorageObjectsRewriteDestinationPredefinedACLEnum = "publicRead"
)

type StorageObjectsRewriteProjectionEnum string

const (
	StorageObjectsRewriteProjectionEnumFull  StorageObjectsRewriteProjectionEnum = "full"
	StorageObjectsRewriteProjectionEnumNoACL StorageObjectsRewriteProjectionEnum = "noAcl"
)

type StorageObjectsRewriteQueryParams struct {
	Alt                            *shared.AltEnum                                    `queryParam:"style=form,explode=true,name=alt"`
	DestinationKmsKeyName          *string                                            `queryParam:"style=form,explode=true,name=destinationKmsKeyName"`
	DestinationPredefinedACL       *StorageObjectsRewriteDestinationPredefinedACLEnum `queryParam:"style=form,explode=true,name=destinationPredefinedAcl"`
	Fields                         *string                                            `queryParam:"style=form,explode=true,name=fields"`
	IfGenerationMatch              *string                                            `queryParam:"style=form,explode=true,name=ifGenerationMatch"`
	IfGenerationNotMatch           *string                                            `queryParam:"style=form,explode=true,name=ifGenerationNotMatch"`
	IfMetagenerationMatch          *string                                            `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
	IfMetagenerationNotMatch       *string                                            `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
	IfSourceGenerationMatch        *string                                            `queryParam:"style=form,explode=true,name=ifSourceGenerationMatch"`
	IfSourceGenerationNotMatch     *string                                            `queryParam:"style=form,explode=true,name=ifSourceGenerationNotMatch"`
	IfSourceMetagenerationMatch    *string                                            `queryParam:"style=form,explode=true,name=ifSourceMetagenerationMatch"`
	IfSourceMetagenerationNotMatch *string                                            `queryParam:"style=form,explode=true,name=ifSourceMetagenerationNotMatch"`
	Key                            *string                                            `queryParam:"style=form,explode=true,name=key"`
	MaxBytesRewrittenPerCall       *string                                            `queryParam:"style=form,explode=true,name=maxBytesRewrittenPerCall"`
	OauthToken                     *string                                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                    *bool                                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection                     *StorageObjectsRewriteProjectionEnum               `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser                      *string                                            `queryParam:"style=form,explode=true,name=quotaUser"`
	RewriteToken                   *string                                            `queryParam:"style=form,explode=true,name=rewriteToken"`
	SourceGeneration               *string                                            `queryParam:"style=form,explode=true,name=sourceGeneration"`
	UploadType                     *string                                            `queryParam:"style=form,explode=true,name=uploadType"`
	UserIP                         *string                                            `queryParam:"style=form,explode=true,name=userIp"`
	UserProject                    *string                                            `queryParam:"style=form,explode=true,name=userProject"`
}

type StorageObjectsRewriteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsRewriteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsRewriteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type StorageObjectsRewriteSecurity struct {
	Option1 *StorageObjectsRewriteSecurityOption1 `security:"option"`
	Option2 *StorageObjectsRewriteSecurityOption2 `security:"option"`
	Option3 *StorageObjectsRewriteSecurityOption3 `security:"option"`
}

type StorageObjectsRewriteRequest struct {
	PathParams  StorageObjectsRewritePathParams
	QueryParams StorageObjectsRewriteQueryParams
	Request     *shared.Object `request:"mediaType=application/json"`
	Security    StorageObjectsRewriteSecurity
}

type StorageObjectsRewriteResponse struct {
	ContentType     string
	RewriteResponse *shared.RewriteResponse
	StatusCode      int64
}
