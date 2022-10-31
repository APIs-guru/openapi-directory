package operations

import (
"openapi/pkg/models/shared")

type CalendarACLListPathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    
}

type CalendarACLListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    ShowDeleted *bool `queryParam:"style=form,explode=true,name=showDeleted"`
    SyncToken *string `queryParam:"style=form,explode=true,name=syncToken"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarACLListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarACLListRequest struct {
    PathParams CalendarACLListPathParams 
    QueryParams CalendarACLListQueryParams 
    Security CalendarACLListSecurity 
    
}

type CalendarACLListResponse struct {
    ACL *shared.ACL 
    ContentType string 
    StatusCode int64 
    
}

