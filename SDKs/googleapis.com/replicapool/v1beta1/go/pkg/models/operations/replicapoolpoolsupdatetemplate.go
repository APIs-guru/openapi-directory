package operations

import (
"openapi/pkg/models/shared")

type ReplicapoolPoolsUpdatetemplatePathParams struct {
    PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
    ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
    Zone string `pathParam:"style=simple,explode=false,name=zone"`
    
}

type ReplicapoolPoolsUpdatetemplateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type ReplicapoolPoolsUpdatetemplateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolPoolsUpdatetemplateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolPoolsUpdatetemplateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolPoolsUpdatetemplateSecurity struct {
    Option1 *ReplicapoolPoolsUpdatetemplateSecurityOption1 `security:"option"`
    Option2 *ReplicapoolPoolsUpdatetemplateSecurityOption2 `security:"option"`
    Option3 *ReplicapoolPoolsUpdatetemplateSecurityOption3 `security:"option"`
    
}

type ReplicapoolPoolsUpdatetemplateRequest struct {
    PathParams ReplicapoolPoolsUpdatetemplatePathParams 
    QueryParams ReplicapoolPoolsUpdatetemplateQueryParams 
    Request *shared.Template `request:"mediaType=application/json"`
    Security ReplicapoolPoolsUpdatetemplateSecurity 
    
}

type ReplicapoolPoolsUpdatetemplateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

