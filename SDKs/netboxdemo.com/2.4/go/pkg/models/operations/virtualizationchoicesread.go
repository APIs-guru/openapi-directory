package operations



type VirtualizationChoicesReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type VirtualizationChoicesReadRequest struct {
    PathParams VirtualizationChoicesReadPathParams 
    
}

type VirtualizationChoicesReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

