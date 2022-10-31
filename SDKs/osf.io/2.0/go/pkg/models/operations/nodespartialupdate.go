package operations



type NodesPartialUpdatePathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesPartialUpdateRequest struct {
    PathParams NodesPartialUpdatePathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type NodesPartialUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    
}

