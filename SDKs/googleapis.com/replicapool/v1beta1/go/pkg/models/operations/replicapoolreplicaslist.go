package operations

import (
"openapi/pkg/models/shared")

type ReplicapoolReplicasListPathParams struct {
    PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
    ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
    Zone string `pathParam:"style=simple,explode=false,name=zone"`
    
}

type ReplicapoolReplicasListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type ReplicapoolReplicasListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolReplicasListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolReplicasListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolReplicasListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolReplicasListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolReplicasListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolReplicasListSecurity struct {
    Option1 *ReplicapoolReplicasListSecurityOption1 `security:"option"`
    Option2 *ReplicapoolReplicasListSecurityOption2 `security:"option"`
    Option3 *ReplicapoolReplicasListSecurityOption3 `security:"option"`
    Option4 *ReplicapoolReplicasListSecurityOption4 `security:"option"`
    Option5 *ReplicapoolReplicasListSecurityOption5 `security:"option"`
    Option6 *ReplicapoolReplicasListSecurityOption6 `security:"option"`
    
}

type ReplicapoolReplicasListRequest struct {
    PathParams ReplicapoolReplicasListPathParams 
    QueryParams ReplicapoolReplicasListQueryParams 
    Security ReplicapoolReplicasListSecurity 
    
}

type ReplicapoolReplicasListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

