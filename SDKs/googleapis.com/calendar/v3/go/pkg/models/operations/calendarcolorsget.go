package operations

import (
"openapi/pkg/models/shared")

type CalendarColorsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarColorsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarColorsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarColorsGetSecurity struct {
    Option1 *CalendarColorsGetSecurityOption1 `security:"option"`
    Option2 *CalendarColorsGetSecurityOption2 `security:"option"`
    
}

type CalendarColorsGetRequest struct {
    QueryParams CalendarColorsGetQueryParams 
    Security CalendarColorsGetSecurity 
    
}

type CalendarColorsGetResponse struct {
    Colors *shared.Colors 
    ContentType string 
    StatusCode int64 
    
}

