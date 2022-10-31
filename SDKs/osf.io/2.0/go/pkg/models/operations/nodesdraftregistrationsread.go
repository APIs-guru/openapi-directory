package operations



type NodesDraftRegistrationsReadPathParams struct {
    DraftID string `pathParam:"style=simple,explode=false,name=draft_id"`
    NodeID string `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type NodesDraftRegistrationsReadRequest struct {
    PathParams NodesDraftRegistrationsReadPathParams 
    
}

type NodesDraftRegistrationsReadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

