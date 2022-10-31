package operations

import (
"openapi/pkg/models/shared")


type CalendarCalendarListListMinAccessRoleEnum string

const (
    CalendarCalendarListListMinAccessRoleEnumFreeBusyReader CalendarCalendarListListMinAccessRoleEnum = "freeBusyReader"
CalendarCalendarListListMinAccessRoleEnumOwner CalendarCalendarListListMinAccessRoleEnum = "owner"
CalendarCalendarListListMinAccessRoleEnumReader CalendarCalendarListListMinAccessRoleEnum = "reader"
CalendarCalendarListListMinAccessRoleEnumWriter CalendarCalendarListListMinAccessRoleEnum = "writer"
)


type CalendarCalendarListListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    MinAccessRole *CalendarCalendarListListMinAccessRoleEnum `queryParam:"style=form,explode=true,name=minAccessRole"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ShowDeleted *bool `queryParam:"style=form,explode=true,name=showDeleted"`
    ShowHidden *bool `queryParam:"style=form,explode=true,name=showHidden"`
    SyncToken *string `queryParam:"style=form,explode=true,name=syncToken"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarCalendarListListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarListListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarCalendarListListSecurity struct {
    Option1 *CalendarCalendarListListSecurityOption1 `security:"option"`
    Option2 *CalendarCalendarListListSecurityOption2 `security:"option"`
    
}

type CalendarCalendarListListRequest struct {
    QueryParams CalendarCalendarListListQueryParams 
    Security CalendarCalendarListListSecurity 
    
}

type CalendarCalendarListListResponse struct {
    CalendarList *shared.CalendarList 
    ContentType string 
    StatusCode int64 
    
}

