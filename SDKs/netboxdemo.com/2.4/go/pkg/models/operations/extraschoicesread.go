package operations



type ExtrasChoicesReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ExtrasChoicesReadRequest struct {
    PathParams ExtrasChoicesReadPathParams 
    
}

type ExtrasChoicesReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

