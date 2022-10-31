package operations



type GetProjectCategoryListPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetProjectCategoryListRequest struct {
    PathParams GetProjectCategoryListPathParams 
    
}

type GetProjectCategoryListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    ProjectCategoryListVo *interface{} 
    StatusCode int64 
    
}

