package operations

import (
"openapi/pkg/models/shared")

type CalendarEventsInsertPathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    
}


type CalendarEventsInsertSendUpdatesEnum string

const (
    CalendarEventsInsertSendUpdatesEnumAll CalendarEventsInsertSendUpdatesEnum = "all"
CalendarEventsInsertSendUpdatesEnumExternalOnly CalendarEventsInsertSendUpdatesEnum = "externalOnly"
CalendarEventsInsertSendUpdatesEnumNone CalendarEventsInsertSendUpdatesEnum = "none"
)


type CalendarEventsInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    ConferenceDataVersion *int64 `queryParam:"style=form,explode=true,name=conferenceDataVersion"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxAttendees *int64 `queryParam:"style=form,explode=true,name=maxAttendees"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SendNotifications *bool `queryParam:"style=form,explode=true,name=sendNotifications"`
    SendUpdates *CalendarEventsInsertSendUpdatesEnum `queryParam:"style=form,explode=true,name=sendUpdates"`
    SupportsAttachments *bool `queryParam:"style=form,explode=true,name=supportsAttachments"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarEventsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsInsertSecurity struct {
    Option1 *CalendarEventsInsertSecurityOption1 `security:"option"`
    Option2 *CalendarEventsInsertSecurityOption2 `security:"option"`
    
}

type CalendarEventsInsertRequest struct {
    PathParams CalendarEventsInsertPathParams 
    QueryParams CalendarEventsInsertQueryParams 
    Request *shared.Event `request:"mediaType=application/json"`
    Security CalendarEventsInsertSecurity 
    
}

type CalendarEventsInsertResponse struct {
    ContentType string 
    Event *shared.Event 
    StatusCode int64 
    
}

