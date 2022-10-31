package operations



type GetClientWorkgroupListPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetClientWorkgroupListRequest struct {
    PathParams GetClientWorkgroupListPathParams 
    
}

type GetClientWorkgroupListResponse struct {
    Body []byte 
    ClientWorkgroupListVo *interface{} 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

