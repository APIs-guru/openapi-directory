package operations

import (
"openapi/pkg/models/shared")

type StorageBucketAccessControlsPatchPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    Entity string `pathParam:"style=simple,explode=false,name=entity"`
    
}

type StorageBucketAccessControlsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type StorageBucketAccessControlsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageBucketAccessControlsPatchRequest struct {
    PathParams StorageBucketAccessControlsPatchPathParams 
    QueryParams StorageBucketAccessControlsPatchQueryParams 
    Request *shared.BucketAccessControl `request:"mediaType=application/json"`
    Security StorageBucketAccessControlsPatchSecurity 
    
}

type StorageBucketAccessControlsPatchResponse struct {
    BucketAccessControl *shared.BucketAccessControl 
    ContentType string 
    StatusCode int64 
    
}

