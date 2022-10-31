package operations

import (
"openapi/pkg/models/shared")

type CalendarACLUpdatePathParams struct {
    CalendarID string `pathParam:"style=simple,explode=false,name=calendarId"`
    RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
    
}

type CalendarACLUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SendNotifications *bool `queryParam:"style=form,explode=true,name=sendNotifications"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarACLUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarACLUpdateRequest struct {
    PathParams CalendarACLUpdatePathParams 
    QueryParams CalendarACLUpdateQueryParams 
    Request *shared.ACLRule `request:"mediaType=application/json"`
    Security CalendarACLUpdateSecurity 
    
}

type CalendarACLUpdateResponse struct {
    ACLRule *shared.ACLRule 
    ContentType string 
    StatusCode int64 
    
}

