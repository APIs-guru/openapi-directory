package operations



type NodesChildrenListPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesChildrenListRequest struct {
    PathParams NodesChildrenListPathParams 
    
}

type NodesChildrenListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

