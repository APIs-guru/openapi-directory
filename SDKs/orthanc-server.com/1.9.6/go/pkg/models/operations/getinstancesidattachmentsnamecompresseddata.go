package operations



type GetInstancesIDAttachmentsNameCompressedDataPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetInstancesIDAttachmentsNameCompressedDataHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetInstancesIDAttachmentsNameCompressedDataRequest struct {
    PathParams GetInstancesIDAttachmentsNameCompressedDataPathParams 
    Headers GetInstancesIDAttachmentsNameCompressedDataHeaders 
    
}

type GetInstancesIDAttachmentsNameCompressedDataResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

