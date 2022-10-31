package operations



type NodesDeletePathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesDeleteRequest struct {
    PathParams NodesDeletePathParams 
    
}

type NodesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

