package operations

import (
"openapi/pkg/models/shared")

type CalendarEventsMovePathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    EventID string `pathParam:"style=simple,explode=false,name=eventId"`
    
}


type CalendarEventsMoveSendUpdatesEnum string

const (
    CalendarEventsMoveSendUpdatesEnumAll CalendarEventsMoveSendUpdatesEnum = "all"
CalendarEventsMoveSendUpdatesEnumExternalOnly CalendarEventsMoveSendUpdatesEnum = "externalOnly"
CalendarEventsMoveSendUpdatesEnumNone CalendarEventsMoveSendUpdatesEnum = "none"
)


type CalendarEventsMoveQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Destination string `queryParam:"style=form,explode=true,name=destination"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SendNotifications *bool `queryParam:"style=form,explode=true,name=sendNotifications"`
    SendUpdates *CalendarEventsMoveSendUpdatesEnum `queryParam:"style=form,explode=true,name=sendUpdates"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarEventsMoveSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsMoveSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsMoveSecurity struct {
    Option1 *CalendarEventsMoveSecurityOption1 `security:"option"`
    Option2 *CalendarEventsMoveSecurityOption2 `security:"option"`
    
}

type CalendarEventsMoveRequest struct {
    PathParams CalendarEventsMovePathParams 
    QueryParams CalendarEventsMoveQueryParams 
    Security CalendarEventsMoveSecurity 
    
}

type CalendarEventsMoveResponse struct {
    ContentType string 
    Event *shared.Event 
    StatusCode int64 
    
}

