package operations



type GetDeactivationReasonListPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetDeactivationReasonListRequest struct {
    PathParams GetDeactivationReasonListPathParams 
    
}

type GetDeactivationReasonListResponse struct {
    Body []byte 
    ContentType string 
    DeactivationReasonListVo *interface{} 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

