package operations

import (
"openapi/pkg/models/shared")

type CalendarCalendarListInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    ColorRgbFormat *bool `queryParam:"style=form,explode=true,name=colorRgbFormat"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarCalendarListInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarListInsertRequest struct {
    QueryParams CalendarCalendarListInsertQueryParams 
    Request *shared.CalendarListEntry `request:"mediaType=application/json"`
    Security CalendarCalendarListInsertSecurity 
    
}

type CalendarCalendarListInsertResponse struct {
    CalendarListEntry *shared.CalendarListEntry 
    ContentType string 
    StatusCode int64 
    
}

