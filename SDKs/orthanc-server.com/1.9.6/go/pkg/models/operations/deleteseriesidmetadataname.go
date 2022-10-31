package operations



type DeleteSeriesIDMetadataNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DeleteSeriesIDMetadataNameHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type DeleteSeriesIDMetadataNameRequest struct {
    PathParams DeleteSeriesIDMetadataNamePathParams 
    Headers DeleteSeriesIDMetadataNameHeaders 
    
}

type DeleteSeriesIDMetadataNameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

