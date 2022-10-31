package operations

import (
"openapi/pkg/models/shared")

type StorageDefaultObjectAccessControlsInsertPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    
}

type StorageDefaultObjectAccessControlsInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type StorageDefaultObjectAccessControlsInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageDefaultObjectAccessControlsInsertRequest struct {
    PathParams StorageDefaultObjectAccessControlsInsertPathParams 
    QueryParams StorageDefaultObjectAccessControlsInsertQueryParams 
    Request *shared.ObjectAccessControl `request:"mediaType=application/json"`
    Security StorageDefaultObjectAccessControlsInsertSecurity 
    
}

type StorageDefaultObjectAccessControlsInsertResponse struct {
    ContentType string 
    ObjectAccessControl *shared.ObjectAccessControl 
    StatusCode int64 
    
}

