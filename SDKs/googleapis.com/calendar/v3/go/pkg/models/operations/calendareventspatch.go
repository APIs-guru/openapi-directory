package operations

import (
"openapi/pkg/models/shared")

type CalendarEventsPatchPathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    EventID string `pathParam:"style=simple,explode=false,name=eventId"`
    
}


type CalendarEventsPatchSendUpdatesEnum string

const (
    CalendarEventsPatchSendUpdatesEnumAll CalendarEventsPatchSendUpdatesEnum = "all"
CalendarEventsPatchSendUpdatesEnumExternalOnly CalendarEventsPatchSendUpdatesEnum = "externalOnly"
CalendarEventsPatchSendUpdatesEnumNone CalendarEventsPatchSendUpdatesEnum = "none"
)


type CalendarEventsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AlwaysIncludeEmail *bool `queryParam:"style=form,explode=true,name=alwaysIncludeEmail"`
    ConferenceDataVersion *int64 `queryParam:"style=form,explode=true,name=conferenceDataVersion"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxAttendees *int64 `queryParam:"style=form,explode=true,name=maxAttendees"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SendNotifications *bool `queryParam:"style=form,explode=true,name=sendNotifications"`
    SendUpdates *CalendarEventsPatchSendUpdatesEnum `queryParam:"style=form,explode=true,name=sendUpdates"`
    SupportsAttachments *bool `queryParam:"style=form,explode=true,name=supportsAttachments"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarEventsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsPatchSecurity struct {
    Option1 *CalendarEventsPatchSecurityOption1 `security:"option"`
    Option2 *CalendarEventsPatchSecurityOption2 `security:"option"`
    
}

type CalendarEventsPatchRequest struct {
    PathParams CalendarEventsPatchPathParams 
    QueryParams CalendarEventsPatchQueryParams 
    Request *shared.Event `request:"mediaType=application/json"`
    Security CalendarEventsPatchSecurity 
    
}

type CalendarEventsPatchResponse struct {
    ContentType string 
    Event *shared.Event 
    StatusCode int64 
    
}

