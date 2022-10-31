package operations

import (
"openapi/pkg/models/shared")

type CalendarCalendarsUpdatePathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    
}

type CalendarCalendarsUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarCalendarsUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarsUpdateRequest struct {
    PathParams CalendarCalendarsUpdatePathParams 
    QueryParams CalendarCalendarsUpdateQueryParams 
    Request *shared.Calendar `request:"mediaType=application/json"`
    Security CalendarCalendarsUpdateSecurity 
    
}

type CalendarCalendarsUpdateResponse struct {
    Calendar *shared.Calendar 
    ContentType string 
    StatusCode int64 
    
}

