package operations



type PostSpecProductTypeListOfWorkgroupPathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type PostSpecProductTypeListOfWorkgroupRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ApplicationXYaml []byte `request:"mediaType=application/x-yaml"`
    TextCsv []byte `request:"mediaType=text/csv"`
    TextXML []byte `request:"mediaType=text/xml"`
    TextXYaml []byte `request:"mediaType=text/x-yaml"`
    WgSpecPrdTypeRegPersistVo *interface{} `request:"mediaType=application/json"`
    WgSpecPrdTypeRegPersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
    
}

type PostSpecProductTypeListOfWorkgroupRequest struct {
    PathParams PostSpecProductTypeListOfWorkgroupPathParams 
    Request *PostSpecProductTypeListOfWorkgroupRequests 
    
}

type PostSpecProductTypeListOfWorkgroupResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    WgSpecPrdTypeRegPersistVo *interface{} 
    
}

