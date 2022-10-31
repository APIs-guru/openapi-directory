package operations



type PostSeriesIDAttachmentsNameCompressPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PostSeriesIDAttachmentsNameCompressRequest struct {
    PathParams PostSeriesIDAttachmentsNameCompressPathParams 
    
}

type PostSeriesIDAttachmentsNameCompressResponse struct {
    ContentType string 
    StatusCode int64 
    
}

