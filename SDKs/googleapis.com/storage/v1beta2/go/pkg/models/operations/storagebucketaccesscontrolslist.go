package operations

import (
"openapi/pkg/models/shared")

type StorageBucketAccessControlsListPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    
}

type StorageBucketAccessControlsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type StorageBucketAccessControlsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageBucketAccessControlsListRequest struct {
    PathParams StorageBucketAccessControlsListPathParams 
    QueryParams StorageBucketAccessControlsListQueryParams 
    Security StorageBucketAccessControlsListSecurity 
    
}

type StorageBucketAccessControlsListResponse struct {
    BucketAccessControls *shared.BucketAccessControls 
    ContentType string 
    StatusCode int64 
    
}

