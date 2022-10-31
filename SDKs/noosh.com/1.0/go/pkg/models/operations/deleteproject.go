package operations



type DeleteProjectPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type DeleteProjectRequest struct {
    PathParams DeleteProjectPathParams 
    
}

type DeleteProjectResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

