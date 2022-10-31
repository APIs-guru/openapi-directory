package operations

import (
"openapi/pkg/models/shared")

type StorageObjectsDeletePathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    Object string `pathParam:"style=simple,explode=false,name=object"`
    
}

type StorageObjectsDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Generation *string `queryParam:"style=form,explode=true,name=generation"`
    IfGenerationMatch *string `queryParam:"style=form,explode=true,name=ifGenerationMatch"`
    IfGenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifGenerationNotMatch"`
    IfMetagenerationMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationMatch"`
    IfMetagenerationNotMatch *string `queryParam:"style=form,explode=true,name=ifMetagenerationNotMatch"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type StorageObjectsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageObjectsDeleteSecurity struct {
    Option1 *StorageObjectsDeleteSecurityOption1 `security:"option"`
    Option2 *StorageObjectsDeleteSecurityOption2 `security:"option"`
    
}

type StorageObjectsDeleteRequest struct {
    PathParams StorageObjectsDeletePathParams 
    QueryParams StorageObjectsDeleteQueryParams 
    Security StorageObjectsDeleteSecurity 
    
}

type StorageObjectsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

