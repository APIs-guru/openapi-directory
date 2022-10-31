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
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type StorageBucketAccessControlsUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
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

