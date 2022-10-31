package operations



type PostExchangeRatePathParams struct {
    WorkgroupID string `pathParam:"style=simple,explode=false,name=workgroup_id"`
    
}

type PostExchangeRateRequests struct {
    ApplicationXML []byte `request:"mediaType=application/xml"`
    ApplicationXYaml []byte `request:"mediaType=application/x-yaml"`
    MultiExchangeRatePersistListVo *interface{} `request:"mediaType=application/json"`
    MultiExchangeRatePersistListVo1 *interface{} `request:"mediaType=application/x-json-smile"`
    TextCsv []byte `request:"mediaType=text/csv"`
    TextXML []byte `request:"mediaType=text/xml"`
    TextXYaml []byte `request:"mediaType=text/x-yaml"`
    
}

type PostExchangeRateRequest struct {
    PathParams PostExchangeRatePathParams 
    Request *PostExchangeRateRequests 
    
}

type PostExchangeRateResponse struct {
    Body []byte 
    ContentType string 
    HTTPStatus *interface{} 
    HTTPStatusVo *interface{} 
    StatusCode int64 
    
}

