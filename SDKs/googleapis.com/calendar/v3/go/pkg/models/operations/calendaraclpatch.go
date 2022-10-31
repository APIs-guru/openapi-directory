package operations

import (
"openapi/pkg/models/shared")

type CalendarACLPatchPathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
    
}

type CalendarACLPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SendNotifications *bool `queryParam:"style=form,explode=true,name=sendNotifications"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarACLPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarACLPatchRequest struct {
    PathParams CalendarACLPatchPathParams 
    QueryParams CalendarACLPatchQueryParams 
    Request *shared.ACLRule `request:"mediaType=application/json"`
    Security CalendarACLPatchSecurity 
    
}

type CalendarACLPatchResponse struct {
    ACLRule *shared.ACLRule 
    ContentType string 
    StatusCode int64 
    
}

