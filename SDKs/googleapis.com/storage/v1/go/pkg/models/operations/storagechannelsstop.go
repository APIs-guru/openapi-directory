package operations

import (
"openapi/pkg/models/shared")

type StorageChannelsStopQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type StorageChannelsStopSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageChannelsStopSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageChannelsStopSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageChannelsStopSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageChannelsStopSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type StorageChannelsStopSecurity struct {
    Option1 *StorageChannelsStopSecurityOption1 `security:"option"`
    Option2 *StorageChannelsStopSecurityOption2 `security:"option"`
    Option3 *StorageChannelsStopSecurityOption3 `security:"option"`
    Option4 *StorageChannelsStopSecurityOption4 `security:"option"`
    Option5 *StorageChannelsStopSecurityOption5 `security:"option"`
    
}

type StorageChannelsStopRequest struct {
    QueryParams StorageChannelsStopQueryParams 
    Request *shared.Channel `request:"mediaType=application/json"`
    Security StorageChannelsStopSecurity 
    
}

type StorageChannelsStopResponse struct {
    ContentType string 
    StatusCode int64 
    
}

