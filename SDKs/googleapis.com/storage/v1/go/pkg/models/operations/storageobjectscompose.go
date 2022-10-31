package operations

import (
"openapi/pkg/models/shared")

type StorageObjectsComposePathParams struct {
    DestinationBucket string `pathParam:"style=simple,explode=false,name=destinationBucket"`
    DestinationObject string `pathParam:"style=simple,explode=false,name=destinationObject"`
    
}


type StorageObjectsComposeDestinationPredefinedACLEnum string

const (
    StorageObjectsComposeDestinationPredefinedACLEnumAuthenticatedRead StorageObjectsComposeDestinationPredefinedACLEnum = "authenticatedRead"
StorageObjectsComposeDestinationPredefinedACLEnumBucketOwnerFullControl StorageObjectsComposeDestinationPredefinedACLEnum = "bucketOwnerFullControl"
StorageObjectsComposeDestinationPredefinedACLEnumBucketOwnerRead StorageObjectsComposeDestinationPredefinedACLEnum = "bucketOwnerRead"
StorageObjectsComposeDestinationPredefinedACLEnumPrivate StorageObjectsComposeDestinationPredefinedACLEnum = "private"
StorageObjectsComposeDestinationPredefinedACLEnumProjectPrivate StorageObjectsComposeDestinationPredefinedACLEnum = "projectPrivate"
StorageObjectsComposeDestinationPredefinedACLEnumPublicRead StorageObjectsComposeDestinationPredefinedACLEnum = "publicRead"
)


type StorageObjectsComposeQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    DestinationPredefinedACL *StorageObjectsComposeDestinationPredefinedACLEnum `queryParam:"style=form,explode=true,name=destinationPredefinedAcl"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    IfGenerationMatch *string `queryParam:"style=form,explode=true,name=ifGenerationMatch"`
    IfMetagenerationMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    KmsKeyName *string `queryParam:"style=form,explode=true,name=kmsKeyName"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
    
}

type StorageObjectsComposeSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsComposeSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsComposeSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsComposeSecurity struct {
    Option1 *StorageObjectsComposeSecurityOption1 `security:"option"`
    Option2 *StorageObjectsComposeSecurityOption2 `security:"option"`
    Option3 *StorageObjectsComposeSecurityOption3 `security:"option"`
    
}

type StorageObjectsComposeRequest struct {
    PathParams StorageObjectsComposePathParams 
    QueryParams StorageObjectsComposeQueryParams 
    Request *shared.ComposeRequest `request:"mediaType=application/json"`
    Security StorageObjectsComposeSecurity 
    
}

type StorageObjectsComposeResponse struct {
    ContentType string 
    Object *shared.Object 
    StatusCode int64 
    
}

