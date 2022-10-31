package operations

import (
"openapi/pkg/models/shared")

type StorageBucketAccessControlsUpdatePathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    Entity string `pathParam:"style=simple,explode=false,name=entity"`
    
}

type StorageBucketAccessControlsUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
    
}

type StorageBucketAccessControlsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageBucketAccessControlsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageBucketAccessControlsUpdateSecurity struct {
    Option1 *StorageBucketAccessControlsUpdateSecurityOption1 `security:"option"`
    Option2 *StorageBucketAccessControlsUpdateSecurityOption2 `security:"option"`
    
}

type StorageBucketAccessControlsUpdateRequest struct {
    PathParams StorageBucketAccessControlsUpdatePathParams 
    QueryParams StorageBucketAccessControlsUpdateQueryParams 
    Request *shared.BucketAccessControl `request:"mediaType=application/json"`
    Security StorageBucketAccessControlsUpdateSecurity 
    
}

type StorageBucketAccessControlsUpdateResponse struct {
    BucketAccessControl *shared.BucketAccessControl 
    ContentType string 
    StatusCode int64 
    
}

