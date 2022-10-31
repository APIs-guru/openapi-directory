package operations

import (
"openapi/pkg/models/shared")

type DriveAppsGetPathParams struct {
    AppID string `pathParam:"style=simple,explode=false,name=appId"`
    
}

type DriveAppsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type DriveAppsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveAppsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveAppsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveAppsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveAppsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveAppsGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveAppsGetSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DriveAppsGetSecurity struct {
    Option1 *DriveAppsGetSecurityOption1 `security:"option"`
    Option2 *DriveAppsGetSecurityOption2 `security:"option"`
    Option3 *DriveAppsGetSecurityOption3 `security:"option"`
    Option4 *DriveAppsGetSecurityOption4 `security:"option"`
    Option5 *DriveAppsGetSecurityOption5 `security:"option"`
    Option6 *DriveAppsGetSecurityOption6 `security:"option"`
    Option7 *DriveAppsGetSecurityOption7 `security:"option"`
    
}

type DriveAppsGetRequest struct {
    PathParams DriveAppsGetPathParams 
    QueryParams DriveAppsGetQueryParams 
    Security DriveAppsGetSecurity 
    
}

type DriveAppsGetResponse struct {
    App *shared.App 
    ContentType string 
    StatusCode int64 
    
}

