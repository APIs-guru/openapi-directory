package operations

import (
"openapi/pkg/models/shared")

type WebmastersSearchanalyticsQueryPathParams struct {
    SiteURL string `pathParam:"style=simple,explode=false,name=siteUrl"`
    
}

type WebmastersSearchanalyticsQueryQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type WebmastersSearchanalyticsQuerySecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type WebmastersSearchanalyticsQuerySecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type WebmastersSearchanalyticsQuerySecurity struct {
    Option1 *WebmastersSearchanalyticsQuerySecurityOption1 `security:"option"`
    Option2 *WebmastersSearchanalyticsQuerySecurityOption2 `security:"option"`
    
}

type WebmastersSearchanalyticsQueryRequest struct {
    PathParams WebmastersSearchanalyticsQueryPathParams 
    QueryParams WebmastersSearchanalyticsQueryQueryParams 
    Request *shared.SearchAnalyticsQueryRequest `request:"mediaType=application/json"`
    Security WebmastersSearchanalyticsQuerySecurity 
    
}

type WebmastersSearchanalyticsQueryResponse struct {
    ContentType string 
    SearchAnalyticsQueryResponse *shared.SearchAnalyticsQueryResponse 
    StatusCode int64 
    
}

