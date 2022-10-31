package operations



type PostPatientsIDAttachmentsNameCompressPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PostPatientsIDAttachmentsNameCompressRequest struct {
    PathParams PostPatientsIDAttachmentsNameCompressPathParams 
    
}

type PostPatientsIDAttachmentsNameCompressResponse struct {
    ContentType string 
    StatusCode int64 
    
}

