package operations



type PutQuotePathParams struct {
    ProjectID string `pathParam:"style=simple,explode=false,name=project_id"`
    QuoteID string `pathParam:"style=simple,explode=false,name=quote_id"`
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type PutQuoteRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ApplicationXYaml []byte `request:"mediaType=application/x-yaml"`
    QuotePutPersistVo *interface{} `request:"mediaType=application/json"`
    QuotePutPersistVo1 *interface{} `request:"mediaType=application/x-json-smile"`
    TextCsv []byte `request:"mediaType=text/csv"`
    TextXML []byte `request:"mediaType=text/xml"`
    TextXYaml []byte `request:"mediaType=text/x-yaml"`
    
}

type PutQuoteRequest struct {
    PathParams PutQuotePathParams 
    Request *PutQuoteRequests 
    
}

type PutQuoteResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

