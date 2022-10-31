package operations



type GetWorkgroupListQueryParams struct {
    WorkgroupName *string `queryParam:"style=form,explode=true,name=workgroup_name"`
    WorkgroupTypes []string `queryParam:"style=form,explode=false,name=workgroup_types"`
    
}

type GetWorkgroupListRequest struct {
    QueryParams GetWorkgroupListQueryParams 
    
}

type GetWorkgroupListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    WorkgroupListVo *interface{} 
    
}

