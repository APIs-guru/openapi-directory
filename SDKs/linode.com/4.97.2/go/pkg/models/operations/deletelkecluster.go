package operations

import (
"openapi/pkg/models/shared")

type DeleteLkeClusterPathParams struct {
    ClusterID int64 `pathParam:"style=simple,explode=false,name=clusterId"`
    
}

type DeleteLkeClusterSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type DeleteLkeClusterSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteLkeClusterSecurity struct {
    Option1 *DeleteLkeClusterSecurityOption1 `security:"option"`
    Option2 *DeleteLkeClusterSecurityOption2 `security:"option"`
    
}

type DeleteLkeClusterRequest struct {
    PathParams DeleteLkeClusterPathParams 
    Security DeleteLkeClusterSecurity 
    
}

type DeleteLkeClusterDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type DeleteLkeClusterResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteLkeCluster200ApplicationJSONObject map[string]interface{} 
    DeleteLkeClusterDefaultApplicationJSONObject *DeleteLkeClusterDefaultApplicationJSON 
    
}

