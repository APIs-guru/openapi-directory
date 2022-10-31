package operations

import (
"openapi/pkg/models/shared")

type ReplicapoolPoolsGetPathParams struct {
    PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
    ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
    Zone string `pathParam:"style=simple,explode=false,name=zone"`
    
}

type ReplicapoolPoolsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type ReplicapoolPoolsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolPoolsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolPoolsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolPoolsGetSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolPoolsGetSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolPoolsGetSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolPoolsGetSecurity struct {
    Option1 *ReplicapoolPoolsGetSecurityOption1 `security:"option"`
    Option2 *ReplicapoolPoolsGetSecurityOption2 `security:"option"`
    Option3 *ReplicapoolPoolsGetSecurityOption3 `security:"option"`
    Option4 *ReplicapoolPoolsGetSecurityOption4 `security:"option"`
    Option5 *ReplicapoolPoolsGetSecurityOption5 `security:"option"`
    Option6 *ReplicapoolPoolsGetSecurityOption6 `security:"option"`
    
}

type ReplicapoolPoolsGetRequest struct {
    PathParams ReplicapoolPoolsGetPathParams 
    QueryParams ReplicapoolPoolsGetQueryParams 
    Security ReplicapoolPoolsGetSecurity 
    
}

type ReplicapoolPoolsGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

