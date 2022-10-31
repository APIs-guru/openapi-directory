package operations

import (
"openapi/pkg/models/shared")

type StorageNotificationsInsertPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    
}

type StorageNotificationsInsertQueryParams struct {
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

type StorageNotificationsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsInsertSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsInsertSecurity struct {
    Option1 *StorageNotificationsInsertSecurityOption1 `security:"option"`
    Option2 *StorageNotificationsInsertSecurityOption2 `security:"option"`
    Option3 *StorageNotificationsInsertSecurityOption3 `security:"option"`
    
}

type StorageNotificationsInsertRequest struct {
    PathParams StorageNotificationsInsertPathParams 
    QueryParams StorageNotificationsInsertQueryParams 
    Request *shared.Notification `request:"mediaType=application/json"`
    Security StorageNotificationsInsertSecurity 
    
}

type StorageNotificationsInsertResponse struct {
    ContentType string 
    Notification *shared.Notification 
    StatusCode int64 
    
}

