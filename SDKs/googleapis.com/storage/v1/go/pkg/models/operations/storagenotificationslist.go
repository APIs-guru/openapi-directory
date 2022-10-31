package operations

import (
"openapi/pkg/models/shared")

type StorageNotificationsListPathParams struct {
    Bucket string `pathParam:"style=simple,explode=false,name=bucket"`
    
}

type StorageNotificationsListQueryParams struct {
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

type StorageNotificationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageNotificationsListSecurity struct {
    Option1 *StorageNotificationsListSecurityOption1 `security:"option"`
    Option2 *StorageNotificationsListSecurityOption2 `security:"option"`
    Option3 *StorageNotificationsListSecurityOption3 `security:"option"`
    Option4 *StorageNotificationsListSecurityOption4 `security:"option"`
    Option5 *StorageNotificationsListSecurityOption5 `security:"option"`
    
}

type StorageNotificationsListRequest struct {
    PathParams StorageNotificationsListPathParams 
    QueryParams StorageNotificationsListQueryParams 
    Security StorageNotificationsListSecurity 
    
}

type StorageNotificationsListResponse struct {
    ContentType string 
    Notifications *shared.Notifications 
    StatusCode int64 
    
}

