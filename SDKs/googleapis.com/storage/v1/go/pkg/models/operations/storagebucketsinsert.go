package operations

import (
"openapi/pkg/models/shared")


type StorageBucketsInsertPredefinedACLEnum string

const (
    StorageBucketsInsertPredefinedACLEnumAuthenticatedRead StorageBucketsInsertPredefinedACLEnum = "authenticatedRead"
StorageBucketsInsertPredefinedACLEnumPrivate StorageBucketsInsertPredefinedACLEnum = "private"
StorageBucketsInsertPredefinedACLEnumProjectPrivate StorageBucketsInsertPredefinedACLEnum = "projectPrivate"
StorageBucketsInsertPredefinedACLEnumPublicRead StorageBucketsInsertPredefinedACLEnum = "publicRead"
StorageBucketsInsertPredefinedACLEnumPublicReadWrite StorageBucketsInsertPredefinedACLEnum = "publicReadWrite"
)



type StorageBucketsInsertPredefinedDefaultObjectACLEnum string

const (
    StorageBucketsInsertPredefinedDefaultObjectACLEnumAuthenticatedRead StorageBucketsInsertPredefinedDefaultObjectACLEnum = "authenticatedRead"
StorageBucketsInsertPredefinedDefaultObjectACLEnumBucketOwnerFullControl StorageBucketsInsertPredefinedDefaultObjectACLEnum = "bucketOwnerFullControl"
StorageBucketsInsertPredefinedDefaultObjectACLEnumBucketOwnerRead StorageBucketsInsertPredefinedDefaultObjectACLEnum = "bucketOwnerRead"
StorageBucketsInsertPredefinedDefaultObjectACLEnumPrivate StorageBucketsInsertPredefinedDefaultObjectACLEnum = "private"
StorageBucketsInsertPredefinedDefaultObjectACLEnumProjectPrivate StorageBucketsInsertPredefinedDefaultObjectACLEnum = "projectPrivate"
StorageBucketsInsertPredefinedDefaultObjectACLEnumPublicRead StorageBucketsInsertPredefinedDefaultObjectACLEnum = "publicRead"
)



type StorageBucketsInsertProjectionEnum string

const (
    StorageBucketsInsertProjectionEnumFull StorageBucketsInsertProjectionEnum = "full"
StorageBucketsInsertProjectionEnumNoACL StorageBucketsInsertProjectionEnum = "noAcl"
)


type StorageBucketsInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PredefinedACL *StorageBucketsInsertPredefinedACLEnum `queryParam:"style=form,explode=true,name=predefinedAcl"`
    PredefinedDefaultObjectACL *StorageBucketsInsertPredefinedDefaultObjectACLEnum `queryParam:"style=form,explode=true,name=predefinedDefaultObjectAcl"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Project string `queryParam:"style=form,explode=true,name=project"`
    Projection *StorageBucketsInsertProjectionEnum `queryParam:"style=form,explode=true,name=projection"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
    
}

type StorageBucketsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageBucketsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageBucketsInsertSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageBucketsInsertSecurity struct {
    Option1 *StorageBucketsInsertSecurityOption1 `security:"option"`
    Option2 *StorageBucketsInsertSecurityOption2 `security:"option"`
    Option3 *StorageBucketsInsertSecurityOption3 `security:"option"`
    
}

type StorageBucketsInsertRequest struct {
    QueryParams StorageBucketsInsertQueryParams 
    Request *shared.Bucket `request:"mediaType=application/json"`
    Security StorageBucketsInsertSecurity 
    
}

type StorageBucketsInsertResponse struct {
    Bucket *shared.Bucket 
    ContentType string 
    StatusCode int64 
    
}

