package operations



type GetSpecTemplateListPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetSpecTemplateListRequest struct {
    PathParams GetSpecTemplateListPathParams 
    
}

type GetSpecTemplateListResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    SpecTemplateListVo *interface{} 
    StatusCode int64 
    
}

