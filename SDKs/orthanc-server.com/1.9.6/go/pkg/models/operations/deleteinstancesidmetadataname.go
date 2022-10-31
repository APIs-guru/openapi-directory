package operations



type DeleteInstancesIDMetadataNamePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type DeleteInstancesIDMetadataNameHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type DeleteInstancesIDMetadataNameRequest struct {
    PathParams DeleteInstancesIDMetadataNamePathParams 
    Headers DeleteInstancesIDMetadataNameHeaders 
    
}

type DeleteInstancesIDMetadataNameResponse struct {
    ContentType string 
    StatusCode int64 
    
}

