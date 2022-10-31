package operations



type CreateNetworkSmTargetGroupPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type CreateNetworkSmTargetGroupRequestBody struct {
    Name *string `json:"name,omitempty"`
    Scope *string `json:"scope,omitempty"`
    
}

type CreateNetworkSmTargetGroupRequest struct {
    PathParams CreateNetworkSmTargetGroupPathParams 
    Request *CreateNetworkSmTargetGroupRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkSmTargetGroupResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkSmTargetGroup201ApplicationJSONObject map[string]interface{} 
    
}

