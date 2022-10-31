package operations

import (
"openapi/pkg/models/shared")

type CalendarCalendarsGetPathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    
}

type CalendarCalendarsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarCalendarsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarsGetSecurity struct {
    Option1 *CalendarCalendarsGetSecurityOption1 `security:"option"`
    Option2 *CalendarCalendarsGetSecurityOption2 `security:"option"`
    
}

type CalendarCalendarsGetRequest struct {
    PathParams CalendarCalendarsGetPathParams 
    QueryParams CalendarCalendarsGetQueryParams 
    Security CalendarCalendarsGetSecurity 
    
}

type CalendarCalendarsGetResponse struct {
    Calendar *shared.Calendar 
    ContentType string 
    StatusCode int64 
    
}

