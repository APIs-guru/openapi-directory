package operations



type NodesForksListPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesForksListRequest struct {
    PathParams NodesForksListPathParams 
    
}

type NodesForksListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

