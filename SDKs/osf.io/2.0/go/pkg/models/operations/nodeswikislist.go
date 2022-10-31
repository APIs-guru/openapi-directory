package operations



type NodesWikisListPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesWikisListRequest struct {
    PathParams NodesWikisListPathParams 
    
}

type NodesWikisListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

