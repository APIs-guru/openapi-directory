package operations

import (
"openapi/pkg/models/shared")

type PlusPeopleSearchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Language *string `queryParam:"style=form,explode=true,name=language"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type PlusPeopleSearchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusPeopleSearchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type PlusPeopleSearchSecurity struct {
    Option1 *PlusPeopleSearchSecurityOption1 `security:"option"`
    Option2 *PlusPeopleSearchSecurityOption2 `security:"option"`
    
}

type PlusPeopleSearchRequest struct {
    QueryParams PlusPeopleSearchQueryParams 
    Security PlusPeopleSearchSecurity 
    
}

type PlusPeopleSearchResponse struct {
    ContentType string 
    PeopleFeed *shared.PeopleFeed 
    StatusCode int64 
    
}

