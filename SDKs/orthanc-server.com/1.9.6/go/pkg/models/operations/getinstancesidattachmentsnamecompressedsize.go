package operations



type GetInstancesIDAttachmentsNameCompressedSizePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetInstancesIDAttachmentsNameCompressedSizeHeaders struct {
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type GetInstancesIDAttachmentsNameCompressedSizeRequest struct {
    PathParams GetInstancesIDAttachmentsNameCompressedSizePathParams 
    Headers GetInstancesIDAttachmentsNameCompressedSizeHeaders 
    
}

type GetInstancesIDAttachmentsNameCompressedSizeResponse struct {
    Body []byte 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

