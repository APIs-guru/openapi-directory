package operations



type DeletePatientsIDMetadataNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DeletePatientsIDMetadataNameHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type DeletePatientsIDMetadataNameRequest struct {
    PathParams DeletePatientsIDMetadataNamePathParams 
    Headers DeletePatientsIDMetadataNameHeaders 
    
}

type DeletePatientsIDMetadataNameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

