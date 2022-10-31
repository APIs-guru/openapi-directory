package operations



type GetProjectHomeUserFieldListOfClientPathParams struct {
    ClientWorkgroupID string `pathParam:"style=simple,explode=false,name=client_workgroup_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetProjectHomeUserFieldListOfClientRequest struct {
    PathParams GetProjectHomeUserFieldListOfClientPathParams 
    
}

type GetProjectHomeUserFieldListOfClientResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    ProjectHomeUserFieldsListVo *interface{} 
    StatusCode int64 
    
}

