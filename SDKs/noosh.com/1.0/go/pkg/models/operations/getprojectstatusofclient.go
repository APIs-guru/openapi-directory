package operations



type GetProjectStatusOfClientPathParams struct {
    ClientWorkgroupID string `pathParam:"style=simple,explode=false,name=client_workgroup_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetProjectStatusOfClientRequest struct {
    PathParams GetProjectStatusOfClientPathParams 
    
}

type GetProjectStatusOfClientResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    ProjectStatusListVo *interface{} 
    StatusCode int64 
    
}

