package operations

import (
"openapi/pkg/models/shared")

type StorageProjectsHmacKeysCreatePathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type StorageProjectsHmacKeysCreateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ServiceAccountEmail string `queryParam:"style=form,explode=true,name=serviceAccountEmail"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    UserProject *string `queryParam:"style=form,explode=true,name=userProject"`
    
}

type StorageProjectsHmacKeysCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageProjectsHmacKeysCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageProjectsHmacKeysCreateSecurity struct {
    Option1 *StorageProjectsHmacKeysCreateSecurityOption1 `security:"option"`
    Option2 *StorageProjectsHmacKeysCreateSecurityOption2 `security:"option"`
    
}

type StorageProjectsHmacKeysCreateRequest struct {
    PathParams StorageProjectsHmacKeysCreatePathParams 
    QueryParams StorageProjectsHmacKeysCreateQueryParams 
    Security StorageProjectsHmacKeysCreateSecurity 
    
}

type StorageProjectsHmacKeysCreateResponse struct {
    ContentType string 
    HmacKey *shared.HmacKey 
    StatusCode int64 
    
}

