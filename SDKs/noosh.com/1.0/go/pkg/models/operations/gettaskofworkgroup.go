package operations



type GetTaskOfWorkgroupPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetTaskOfWorkgroupRequest struct {
    PathParams GetTaskOfWorkgroupPathParams 
    
}

type GetTaskOfWorkgroupResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    TaskExpandWorkgroupLevelVo *interface{} 
    
}

