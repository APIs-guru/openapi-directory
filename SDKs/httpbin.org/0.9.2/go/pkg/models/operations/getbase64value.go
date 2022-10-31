package operations



type GetBase64ValuePathParams struct {
    Value string `pathParam:"style=simple,explode=false,name=value"`
    
}

type GetBase64ValueRequest struct {
    PathParams GetBase64ValuePathParams 
    
}

type GetBase64ValueResponse struct {
    ContentType string 
    StatusCode int64 
    
}

