package operations



type NodesDraftRegistrationsListPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesDraftRegistrationsListRequest struct {
    PathParams NodesDraftRegistrationsListPathParams 
    
}

type NodesDraftRegistrationsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

