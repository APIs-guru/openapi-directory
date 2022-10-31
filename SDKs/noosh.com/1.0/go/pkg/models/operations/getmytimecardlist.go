package operations



type GetMyTimeCardListPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetMyTimeCardListRequest struct {
    PathParams GetMyTimeCardListPathParams 
    
}

type GetMyTimeCardListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    TimeCardListVo *interface{} 
    
}

