package operations

import (
"openapi/pkg/models/shared")

type StorageObjectsUpdatePathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    Object string `pathParam:"style=simple,explode=false,name=object"`
    
}


type StorageObjectsUpdatePredefinedACLEnum string

const (
    StorageObjectsUpdatePredefinedACLEnumAuthenticatedRead StorageObjectsUpdatePredefinedACLEnum = "authenticatedRead"
StorageObjectsUpdatePredefinedACLEnumBucketOwnerFullControl StorageObjectsUpdatePredefinedACLEnum = "bucketOwnerFullControl"
StorageObjectsUpdatePredefinedACLEnumBucketOwnerRead StorageObjectsUpdatePredefinedACLEnum = "bucketOwnerRead"
StorageObjectsUpdatePredefinedACLEnumPrivate StorageObjectsUpdatePredefinedACLEnum = "private"
StorageObjectsUpdatePredefinedACLEnumProjectPrivate StorageObjectsUpdatePredefinedACLEnum = "projectPrivate"
StorageObjectsUpdatePredefinedACLEnumPublicRead StorageObjectsUpdatePredefinedACLEnum = "publicRead"
)



type StorageObjectsUpdateProjectionEnum string

const (
    StorageObjectsUpdateProjectionEnumFull StorageObjectsUpdateProjectionEnum = "full"
StorageObjectsUpdateProjectionEnumNoACL StorageObjectsUpdateProjectionEnum = "noAcl"
)


type StorageObjectsUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Generation *string `queryParam:"style=form,explode=true,name=generation"`
    IfGenerationMatch *string `queryParam:"style=form,explode=true,name=ifGenerationMatch"`
    IfGenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifGenerationNotMatch"`
    IfMetagenerationMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
    IfMetagenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PredefinedACL *StorageObjectsUpdatePredefinedACLEnum `queryParam:"style=form,explode=true,name=predefinedAcl"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Projection *StorageObjectsUpdateProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
    
}

type StorageObjectsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsUpdateSecurity struct {
    Option1 *StorageObjectsUpdateSecurityOption1 `security:"option"`
    Option2 *StorageObjectsUpdateSecurityOption2 `security:"option"`
    
}

type StorageObjectsUpdateRequest struct {
    PathParams StorageObjectsUpdatePathParams 
    QueryParams StorageObjectsUpdateQueryParams 
    Request *shared.Object `request:"mediaType=application/json"`
    Security StorageObjectsUpdateSecurity 
    
}

type StorageObjectsUpdateResponse struct {
    ContentType string 
    Object *shared.Object 
    StatusCode int64 
    
}

