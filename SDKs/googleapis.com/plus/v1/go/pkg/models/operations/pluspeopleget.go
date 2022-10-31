package operations

import (
"openapi/pkg/models/shared")

type PlusPeopleGetPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type PlusPeopleGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type PlusPeopleGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusPeopleGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusPeopleGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusPeopleGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusPeopleGetSecurity struct {
    Option1 *PlusPeopleGetSecurityOption1 `security:"option"`
    Option2 *PlusPeopleGetSecurityOption2 `security:"option"`
    Option3 *PlusPeopleGetSecurityOption3 `security:"option"`
    Option4 *PlusPeopleGetSecurityOption4 `security:"option"`
    
}

type PlusPeopleGetRequest struct {
    PathParams PlusPeopleGetPathParams 
    QueryParams PlusPeopleGetQueryParams 
    Security PlusPeopleGetSecurity 
    
}

type PlusPeopleGetResponse struct {
    ContentType string 
    Person *shared.Person 
    StatusCode int64 
    
}

