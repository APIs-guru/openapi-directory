package operations

import (
"openapi/pkg/models/shared")

type StorageNotificationsDeletePathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    Notification string `pathParam:"style=simple,explode=false,name=notification"`
    
}

type StorageNotificationsDeleteQueryParams struct {
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

type StorageNotificationsDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsDeleteSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsDeleteSecurity struct {
    Option1 *StorageNotificationsDeleteSecurityOption1 `security:"option"`
    Option2 *StorageNotificationsDeleteSecurityOption2 `security:"option"`
    Option3 *StorageNotificationsDeleteSecurityOption3 `security:"option"`
    
}

type StorageNotificationsDeleteRequest struct {
    PathParams StorageNotificationsDeletePathParams 
    QueryParams StorageNotificationsDeleteQueryParams 
    Security StorageNotificationsDeleteSecurity 
    
}

type StorageNotificationsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

