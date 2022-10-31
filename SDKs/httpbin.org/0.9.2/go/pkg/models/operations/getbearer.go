package operations



type GetBearerHeaders struct {
    Authorization *string `header:"style=simple,explode=false,name=Authorization"`
    
}

type GetBearerRequest struct {
    Headers GetBearerHeaders 
    
}

type GetBearerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

