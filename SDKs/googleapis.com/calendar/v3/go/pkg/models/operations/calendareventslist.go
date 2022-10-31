package operations

import (
"openapi/pkg/models/shared")

type CalendarEventsListPathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    
}


type CalendarEventsListOrderByEnum string

const (
    CalendarEventsListOrderByEnumStartTime CalendarEventsListOrderByEnum = "startTime"
CalendarEventsListOrderByEnumUpdated CalendarEventsListOrderByEnum = "updated"
)


type CalendarEventsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AlwaysIncludeEmail *bool `queryParam:"style=form,explode=true,name=alwaysIncludeEmail"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    ICalUID *string `queryParam:"style=form,explode=true,name=iCalUID"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxAttendees *int64 `queryParam:"style=form,explode=true,name=maxAttendees"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *CalendarEventsListOrderByEnum `queryParam:"style=form,explode=true,name=orderBy"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    PrivateExtendedProperty []string `queryParam:"style=form,explode=true,name=privateExtendedProperty"`
    Q *string `queryParam:"style=form,explode=true,name=q"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SharedExtendedProperty []string `queryParam:"style=form,explode=true,name=sharedExtendedProperty"`
    ShowDeleted *bool `queryParam:"style=form,explode=true,name=showDeleted"`
    ShowHiddenInvitations *bool `queryParam:"style=form,explode=true,name=showHiddenInvitations"`
    SingleEvents *bool `queryParam:"style=form,explode=true,name=singleEvents"`
    SyncToken *string `queryParam:"style=form,explode=true,name=syncToken"`
    TimeMax *string `queryParam:"style=form,explode=true,name=timeMax"`
    TimeMin *string `queryParam:"style=form,explode=true,name=timeMin"`
    TimeZone *string `queryParam:"style=form,explode=true,name=timeZone"`
    UpdatedMin *string `queryParam:"style=form,explode=true,name=updatedMin"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarEventsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarEventsListSecurity struct {
    Option1 *CalendarEventsListSecurityOption1 `security:"option"`
    Option2 *CalendarEventsListSecurityOption2 `security:"option"`
    Option3 *CalendarEventsListSecurityOption3 `security:"option"`
    Option4 *CalendarEventsListSecurityOption4 `security:"option"`
    
}

type CalendarEventsListRequest struct {
    PathParams CalendarEventsListPathParams 
    QueryParams CalendarEventsListQueryParams 
    Security CalendarEventsListSecurity 
    
}

type CalendarEventsListResponse struct {
    ContentType string 
    Events *shared.Events 
    StatusCode int64 
    
}

