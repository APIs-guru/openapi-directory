package operations

import (
"openapi/pkg/models/shared")

type ReplicapoolReplicasDeletePathParams struct {
    PoolName string `pathParam:"style=simple,explode=false,name=poolName"`
    ProjectName string `pathParam:"style=simple,explode=false,name=projectName"`
    ReplicaName string `pathParam:"style=simple,explode=false,name=replicaName"`
    Zone string `pathParam:"style=simple,explode=false,name=zone"`
    
}

type ReplicapoolReplicasDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type ReplicapoolReplicasDeleteSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolReplicasDeleteSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolReplicasDeleteSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReplicapoolReplicasDeleteSecurity struct {
    Option1 *ReplicapoolReplicasDeleteSecurityOption1 `security:"option"`
    Option2 *ReplicapoolReplicasDeleteSecurityOption2 `security:"option"`
    Option3 *ReplicapoolReplicasDeleteSecurityOption3 `security:"option"`
    
}

type ReplicapoolReplicasDeleteRequest struct {
    PathParams ReplicapoolReplicasDeletePathParams 
    QueryParams ReplicapoolReplicasDeleteQueryParams 
    Request *shared.ReplicasDeleteRequest `request:"mediaType=application/json"`
    Security ReplicapoolReplicasDeleteSecurity 
    
}

type ReplicapoolReplicasDeleteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

