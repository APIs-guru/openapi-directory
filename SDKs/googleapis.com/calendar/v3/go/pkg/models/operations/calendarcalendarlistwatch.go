package operations

import (
"openapi/pkg/models/shared")


type CalendarCalendarListWatchMinAccessRoleEnum string

const (
    CalendarCalendarListWatchMinAccessRoleEnumFreeBusyReader CalendarCalendarListWatchMinAccessRoleEnum = "freeBusyReader"
CalendarCalendarListWatchMinAccessRoleEnumOwner CalendarCalendarListWatchMinAccessRoleEnum = "owner"
CalendarCalendarListWatchMinAccessRoleEnumReader CalendarCalendarListWatchMinAccessRoleEnum = "reader"
CalendarCalendarListWatchMinAccessRoleEnumWriter CalendarCalendarListWatchMinAccessRoleEnum = "writer"
)


type CalendarCalendarListWatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    MinAccessRole *CalendarCalendarListWatchMinAccessRoleEnum `queryParam:"style=form,explode=true,name=minAccessRole"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ShowDeleted *bool `queryParam:"style=form,explode=true,name=showDeleted"`
    ShowHidden *bool `queryParam:"style=form,explode=true,name=showHidden"`
    SyncToken *string `queryParam:"style=form,explode=true,name=syncToken"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarCalendarListWatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarListWatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarListWatchSecurity struct {
    Option1 *CalendarCalendarListWatchSecurityOption1 `security:"option"`
    Option2 *CalendarCalendarListWatchSecurityOption2 `security:"option"`
    
}

type CalendarCalendarListWatchRequest struct {
    QueryParams CalendarCalendarListWatchQueryParams 
    Request *shared.Channel `request:"mediaType=application/json"`
    Security CalendarCalendarListWatchSecurity 
    
}

type CalendarCalendarListWatchResponse struct {
    Channel *shared.Channel 
    ContentType string 
    StatusCode int64 
    
}

