package operations



type DeleteStudiesIDMetadataNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DeleteStudiesIDMetadataNameHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type DeleteStudiesIDMetadataNameRequest struct {
    PathParams DeleteStudiesIDMetadataNamePathParams 
    Headers DeleteStudiesIDMetadataNameHeaders 
    
}

type DeleteStudiesIDMetadataNameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

