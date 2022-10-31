package operations

import (
"openapi/pkg/models/shared")

type CalendarSettingsGetPathParams struct {
    Setting string `pathParam:"style=simple,explode=false,name=setting"`
    
}

type CalendarSettingsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarSettingsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarSettingsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarSettingsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarSettingsGetSecurity struct {
    Option1 *CalendarSettingsGetSecurityOption1 `security:"option"`
    Option2 *CalendarSettingsGetSecurityOption2 `security:"option"`
    Option3 *CalendarSettingsGetSecurityOption3 `security:"option"`
    
}

type CalendarSettingsGetRequest struct {
    PathParams CalendarSettingsGetPathParams 
    QueryParams CalendarSettingsGetQueryParams 
    Security CalendarSettingsGetSecurity 
    
}

type CalendarSettingsGetResponse struct {
    ContentType string 
    Setting *shared.Setting 
    StatusCode int64 
    
}

