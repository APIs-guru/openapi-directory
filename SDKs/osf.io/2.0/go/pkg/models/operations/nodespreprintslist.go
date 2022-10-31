package operations



type NodesPreprintsListPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesPreprintsListRequest struct {
    PathParams NodesPreprintsListPathParams 
    
}

type NodesPreprintsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

