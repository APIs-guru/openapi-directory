package operations



type GetProjectStatusPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetProjectStatusRequest struct {
    PathParams GetProjectStatusPathParams 
    
}

type GetProjectStatusResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    ProjectStatusListVo *interface{} 
    StatusCode int64 
    
}

