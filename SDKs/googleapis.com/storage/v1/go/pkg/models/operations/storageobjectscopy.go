package operations

import (
"openapi/pkg/models/shared")

type StorageObjectsCopyPathParams struct {
    DestinationBucket string `pathParam:"style=simple,explode=false,name=destinationBucket"`
    DestinationObject string `pathParam:"style=simple,explode=false,name=destinationObject"`
    SourceBucket string `pathParam:"style=simple,explode=false,name=sourceBucket"`
    SourceObject string `pathParam:"style=simple,explode=false,name=sourceObject"`
    
}


type StorageObjectsCopyDestinationPredefinedACLEnum string

const (
    StorageObjectsCopyDestinationPredefinedACLEnumAuthenticatedRead StorageObjectsCopyDestinationPredefinedACLEnum = "authenticatedRead"
StorageObjectsCopyDestinationPredefinedACLEnumBucketOwnerFullControl StorageObjectsCopyDestinationPredefinedACLEnum = "bucketOwnerFullControl"
StorageObjectsCopyDestinationPredefinedACLEnumBucketOwnerRead StorageObjectsCopyDestinationPredefinedACLEnum = "bucketOwnerRead"
StorageObjectsCopyDestinationPredefinedACLEnumPrivate StorageObjectsCopyDestinationPredefinedACLEnum = "private"
StorageObjectsCopyDestinationPredefinedACLEnumProjectPrivate StorageObjectsCopyDestinationPredefinedACLEnum = "projectPrivate"
StorageObjectsCopyDestinationPredefinedACLEnumPublicRead StorageObjectsCopyDestinationPredefinedACLEnum = "publicRead"
)



type StorageObjectsCopyProjectionEnum string

const (
    StorageObjectsCopyProjectionEnumFull StorageObjectsCopyProjectionEnum = "full"
StorageObjectsCopyProjectionEnumNoACL StorageObjectsCopyProjectionEnum = "noAcl"
)


type StorageObjectsCopyQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    DestinationKmsKeyName *string `queryParam:"style=form,explode=true,name=destinationKmsKeyName"`
    DestinationPredefinedACL *StorageObjectsCopyDestinationPredefinedACLEnum `queryParam:"style=form,explode=true,name=destinationPredefinedAcl"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IfGenerationMatch *string `queryParam:"style=form,explode=true,name=ifGenerationMatch"`
    IfGenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifGenerationNotMatch"`
    IfMetagenerationMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
    IfMetagenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
    IfSourceGenerationMatch *string `queryParam:"style=form,explode=true,name=ifSourceGenerationMatch"`
    IfSourceGenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifSourceGenerationNotMatch"`
    IfSourceMetagenerationMatch *string `queryParam:"style=form,explode=true,name=ifSourceMetagenerationMatch"`
    IfSourceMetagenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifSourceMetagenerationNotMatch"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Projection *StorageObjectsCopyProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SourceGeneration *string `queryParam:"style=form,explode=true,name=sourceGeneration"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
    
}

type StorageObjectsCopySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsCopySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsCopySecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsCopySecurity struct {
    Option1 *StorageObjectsCopySecurityOption1 `security:"option"`
    Option2 *StorageObjectsCopySecurityOption2 `security:"option"`
    Option3 *StorageObjectsCopySecurityOption3 `security:"option"`
    
}

type StorageObjectsCopyRequest struct {
    PathParams StorageObjectsCopyPathParams 
    QueryParams StorageObjectsCopyQueryParams 
    Request *shared.Object `request:"mediaType=application/json"`
    Security StorageObjectsCopySecurity 
    
}

type StorageObjectsCopyResponse struct {
    ContentType string 
    Object *shared.Object 
    StatusCode int64 
    
}

