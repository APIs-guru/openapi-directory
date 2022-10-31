package operations



type PutPatientsIDMetadataNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type PutPatientsIDMetadataNameHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type PutPatientsIDMetadataNameRequest struct {
    PathParams PutPatientsIDMetadataNamePathParams 
    Headers PutPatientsIDMetadataNameHeaders 
    Request []byte `request:"mediaType=text/plain"`
    
}

type PutPatientsIDMetadataNameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

