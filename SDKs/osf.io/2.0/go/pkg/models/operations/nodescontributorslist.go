package operations



type NodesContributorsListPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesContributorsListRequest struct {
    PathParams NodesContributorsListPathParams 
    
}

type NodesContributorsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

