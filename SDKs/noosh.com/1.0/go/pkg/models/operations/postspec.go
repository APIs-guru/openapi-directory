package operations



type PostSpecPathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type PostSpecRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ApplicationXYaml []byte `request:"mediaType=application/x-yaml"`
    SpecPersistVo *interface{} `request:"mediaType=application/json"`
    SpecPersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
    TextCsv []byte `request:"mediaType=text/csv"`
    TextXML []byte `request:"mediaType=text/xml"`
    TextXYaml []byte `request:"mediaType=text/x-yaml"`
    
}

type PostSpecRequest struct {
    PathParams PostSpecPathParams 
    Request *PostSpecRequests 
    
}

type PostSpecResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    SpecVo *interface{} 
    StatusCode int64 
    
}

