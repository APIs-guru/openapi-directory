package operations



type GetTaskListOfProjectPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetTaskListOfProjectRequest struct {
    PathParams GetTaskListOfProjectPathParams 
    
}

type GetTaskListOfProjectResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    TaskListVo *interface{} 
    
}

