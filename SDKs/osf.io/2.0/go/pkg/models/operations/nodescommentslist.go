package operations



type NodesCommentsListPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesCommentsListRequest struct {
    PathParams NodesCommentsListPathParams 
    
}

type NodesCommentsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

