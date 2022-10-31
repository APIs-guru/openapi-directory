package operations



type GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    SpecID string `pathParam:"style=simple,explode=false,name=spec_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequest struct {
    PathParams GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams 
    
}

type GetV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    SpecListVo *interface{} 
    StatusCode int64 
    
}

