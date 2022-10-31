package operations

import (
"openapi/pkg/models/shared")

type CalendarCalendarListGetPathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    
}

type CalendarCalendarListGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarCalendarListGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarListGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarListGetSecurity struct {
    Option1 *CalendarCalendarListGetSecurityOption1 `security:"option"`
    Option2 *CalendarCalendarListGetSecurityOption2 `security:"option"`
    
}

type CalendarCalendarListGetRequest struct {
    PathParams CalendarCalendarListGetPathParams 
    QueryParams CalendarCalendarListGetQueryParams 
    Security CalendarCalendarListGetSecurity 
    
}

type CalendarCalendarListGetResponse struct {
    CalendarListEntry *shared.CalendarListEntry 
    ContentType string 
    StatusCode int64 
    
}

