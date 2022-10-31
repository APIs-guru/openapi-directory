package operations



type GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsPathParams struct {
    SpecTypeID string `pathParam:"style=simple,explode=false,name=spec_type_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsRequest struct {
    PathParams GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsPathParams 
    
}

type GetV1WorkgroupsWorkgroupIDSpecTypesSpecTypeIDSpecTypeFieldsResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    PropertyParamListVo *interface{} 
    StatusCode int64 
    
}

