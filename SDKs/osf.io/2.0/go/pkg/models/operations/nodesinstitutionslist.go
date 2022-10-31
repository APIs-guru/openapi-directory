package operations



type NodesInstitutionsListPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesInstitutionsListRequest struct {
    PathParams NodesInstitutionsListPathParams 
    
}

type NodesInstitutionsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

