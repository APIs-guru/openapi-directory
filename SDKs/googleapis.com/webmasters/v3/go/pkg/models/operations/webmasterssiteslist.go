package operations

import (
"openapi/pkg/models/shared")

type WebmastersSitesListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type WebmastersSitesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type WebmastersSitesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type WebmastersSitesListSecurity struct {
    Option1 *WebmastersSitesListSecurityOption1 `security:"option"`
    Option2 *WebmastersSitesListSecurityOption2 `security:"option"`
    
}

type WebmastersSitesListRequest struct {
    QueryParams WebmastersSitesListQueryParams 
    Security WebmastersSitesListSecurity 
    
}

type WebmastersSitesListResponse struct {
    ContentType string 
    SitesListResponse *shared.SitesListResponse 
    StatusCode int64 
    
}

