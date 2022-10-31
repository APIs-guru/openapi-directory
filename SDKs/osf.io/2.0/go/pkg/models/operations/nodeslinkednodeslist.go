package operations



type NodesLinkedNodesListPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesLinkedNodesListRequest struct {
    PathParams NodesLinkedNodesListPathParams 
    
}

type NodesLinkedNodesListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

