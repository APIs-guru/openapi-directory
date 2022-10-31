package operations

import (
"openapi/pkg/models/shared")

type StorageProjectsHmacKeysUpdatePathParams struct {
    AccessID string `pathParam:"style=simple,explode=false,name=accessId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type StorageProjectsHmacKeysUpdateQueryParams struct {
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

type StorageProjectsHmacKeysUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageProjectsHmacKeysUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageProjectsHmacKeysUpdateSecurity struct {
    Option1 *StorageProjectsHmacKeysUpdateSecurityOption1 `security:"option"`
    Option2 *StorageProjectsHmacKeysUpdateSecurityOption2 `security:"option"`
    
}

type StorageProjectsHmacKeysUpdateRequest struct {
    PathParams StorageProjectsHmacKeysUpdatePathParams 
    QueryParams StorageProjectsHmacKeysUpdateQueryParams 
    Request *shared.HmacKeyMetadata `request:"mediaType=application/json"`
    Security StorageProjectsHmacKeysUpdateSecurity 
    
}

type StorageProjectsHmacKeysUpdateResponse struct {
    ContentType string 
    HmacKeyMetadata *shared.HmacKeyMetadata 
    StatusCode int64 
    
}

