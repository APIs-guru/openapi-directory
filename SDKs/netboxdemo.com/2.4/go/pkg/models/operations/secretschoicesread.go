package operations



type SecretsChoicesReadPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type SecretsChoicesReadRequest struct {
    PathParams SecretsChoicesReadPathParams 
    
}

type SecretsChoicesReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}

