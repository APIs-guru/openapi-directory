package operations

import (
"openapi/pkg/models/shared")

type PostLkeClusterPoolsPathParams struct {
    ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
    
}

type PostLkeClusterPoolsRequestBody struct {
    Count int64 `json:"count"`
    Disks []shared.Items `json:"disks,omitempty"`
    Tags []string `json:"tags,omitempty"`
    Type string `json:"type"`
    
}

type PostLkeClusterPoolsSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type PostLkeClusterPoolsSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type PostLkeClusterPoolsSecurity struct {
    Option1 *PostLkeClusterPoolsSecurityOption1 `security:"option"`
    Option2 *PostLkeClusterPoolsSecurityOption2 `security:"option"`
    
}

type PostLkeClusterPoolsRequest struct {
    PathParams PostLkeClusterPoolsPathParams 
    Request PostLkeClusterPoolsRequestBody `request:"mediaType=application/json"`
    Security PostLkeClusterPoolsSecurity 
    
}

type PostLkeClusterPoolsDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type PostLkeClusterPoolsResponse struct {
    ContentType string 
    LkeNodePool *shared.LkeNodePool 
    StatusCode int64 
    PostLkeClusterPoolsDefaultApplicationJSONObject *PostLkeClusterPoolsDefaultApplicationJSON 
    
}

