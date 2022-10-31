package operations

import (
"openapi/pkg/models/shared")

type CalendarSettingsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    SyncToken *string `queryParam:"style=form,explode=true,name=syncToken"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type CalendarSettingsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarSettingsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarSettingsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type CalendarSettingsListSecurity struct {
    Option1 *CalendarSettingsListSecurityOption1 `security:"option"`
    Option2 *CalendarSettingsListSecurityOption2 `security:"option"`
    Option3 *CalendarSettingsListSecurityOption3 `security:"option"`
    
}

type CalendarSettingsListRequest struct {
    QueryParams CalendarSettingsListQueryParams 
    Security CalendarSettingsListSecurity 
    
}

type CalendarSettingsListResponse struct {
    ContentType string 
    Settings *shared.Settings 
    StatusCode int64 
    
}

