package operations



type GetSpecListPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetSpecListRequest struct {
    PathParams GetSpecListPathParams 
    
}

type GetSpecListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    SpecListVo *interface{} 
    StatusCode int64 
    
}

