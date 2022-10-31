package operations



type PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    SpecID string `pathParam:"style=simple,explode=false,name=spec_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ApplicationXYaml []byte `request:"mediaType=application/x-yaml"`
    SpecUpdatePersistVo *interface{} `request:"mediaType=application/json"`
    SpecUpdatePersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
    TextCsv []byte `request:"mediaType=text/csv"`
    TextXML []byte `request:"mediaType=text/xml"`
    TextXYaml []byte `request:"mediaType=text/x-yaml"`
    
}

type PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequest struct {
    PathParams PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDPathParams 
    Request *PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDRequests 
    
}

type PutV1WorkgroupsWorkgroupIDProjectsProjectIDSpecsSpecIDResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    SpecHTTPStatusVo *interface{} 
    StatusCode int64 
    
}

