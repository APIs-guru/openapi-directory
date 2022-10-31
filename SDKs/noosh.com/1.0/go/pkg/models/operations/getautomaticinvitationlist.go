package operations



type GetAutomaticInvitationListPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetAutomaticInvitationListRequest struct {
    PathParams GetAutomaticInvitationListPathParams 
    
}

type GetAutomaticInvitationListResponse struct {
    AutomaticInvitationsListVo *interface{} 
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

