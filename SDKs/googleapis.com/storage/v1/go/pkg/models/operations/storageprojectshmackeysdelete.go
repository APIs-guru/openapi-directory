package operations

import (
"openapi/pkg/models/shared")

type StorageProjectsHmacKeysDeletePathParams struct {
    AccessID string `pathParam:"style=simple,explode=false,name=accessId"`
    ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
    
}

type StorageProjectsHmacKeysDeleteQueryParams struct {
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

type StorageProjectsHmacKeysDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageProjectsHmacKeysDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageProjectsHmacKeysDeleteSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageProjectsHmacKeysDeleteSecurity struct {
    Option1 *StorageProjectsHmacKeysDeleteSecurityOption1 `security:"option"`
    Option2 *StorageProjectsHmacKeysDeleteSecurityOption2 `security:"option"`
    Option3 *StorageProjectsHmacKeysDeleteSecurityOption3 `security:"option"`
    
}

type StorageProjectsHmacKeysDeleteRequest struct {
    PathParams StorageProjectsHmacKeysDeletePathParams 
    QueryParams StorageProjectsHmacKeysDeleteQueryParams 
    Security StorageProjectsHmacKeysDeleteSecurity 
    
}

type StorageProjectsHmacKeysDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

