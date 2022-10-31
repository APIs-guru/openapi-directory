package operations



type GetDefaultTaskStatusListPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetDefaultTaskStatusListRequest struct {
    PathParams GetDefaultTaskStatusListPathParams 
    
}

type GetDefaultTaskStatusListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    TaskStatusListVo *interface{} 
    
}

