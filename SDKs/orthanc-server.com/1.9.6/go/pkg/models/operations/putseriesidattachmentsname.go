package operations



type PutSeriesIDAttachmentsNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PutSeriesIDAttachmentsNameHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type PutSeriesIDAttachmentsNameRequest struct {
    PathParams PutSeriesIDAttachmentsNamePathParams 
    Headers PutSeriesIDAttachmentsNameHeaders 
    Request []byte `request:"mediaType=application/octet-stream"`
    
}

type PutSeriesIDAttachmentsNameResponse struct {
    ContentType string 
    PutSeriesIDAttachmentsName200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

