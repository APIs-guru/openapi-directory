package operations

import (
"openapi/pkg/models/shared")

type StorageObjectsPatchPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    Object string `pathParam:"style=simple,explode=false,name=object"`
    
}


type StorageObjectsPatchPredefinedACLEnum string

const (
    StorageObjectsPatchPredefinedACLEnumAuthenticatedRead StorageObjectsPatchPredefinedACLEnum = "authenticatedRead"
StorageObjectsPatchPredefinedACLEnumBucketOwnerFullControl StorageObjectsPatchPredefinedACLEnum = "bucketOwnerFullControl"
StorageObjectsPatchPredefinedACLEnumBucketOwnerRead StorageObjectsPatchPredefinedACLEnum = "bucketOwnerRead"
StorageObjectsPatchPredefinedACLEnumPrivate StorageObjectsPatchPredefinedACLEnum = "private"
StorageObjectsPatchPredefinedACLEnumProjectPrivate StorageObjectsPatchPredefinedACLEnum = "projectPrivate"
StorageObjectsPatchPredefinedACLEnumPublicRead StorageObjectsPatchPredefinedACLEnum = "publicRead"
)



type StorageObjectsPatchProjectionEnum string

const (
    StorageObjectsPatchProjectionEnumFull StorageObjectsPatchProjectionEnum = "full"
StorageObjectsPatchProjectionEnumNoACL StorageObjectsPatchProjectionEnum = "noAcl"
)


type StorageObjectsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Generation *string `queryParam:"style=form,explode=true,name=generation"`
    IfGenerationMatch *string `queryParam:"style=form,explode=true,name=ifGenerationMatch"`
    IfGenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifGenerationNotMatch"`
    IfMetagenerationMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
    IfMetagenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PredefinedACL *StorageObjectsPatchPredefinedACLEnum `queryParam:"style=form,explode=true,name=predefinedAcl"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Projection *StorageObjectsPatchProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
    
}

type StorageObjectsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsPatchSecurity struct {
    Option1 *StorageObjectsPatchSecurityOption1 `security:"option"`
    Option2 *StorageObjectsPatchSecurityOption2 `security:"option"`
    
}

type StorageObjectsPatchRequest struct {
    PathParams StorageObjectsPatchPathParams 
    QueryParams StorageObjectsPatchQueryParams 
    Request *shared.Object `request:"mediaType=application/json"`
    Security StorageObjectsPatchSecurity 
    
}

type StorageObjectsPatchResponse struct {
    ContentType string 
    Object *shared.Object 
    StatusCode int64 
    
}

