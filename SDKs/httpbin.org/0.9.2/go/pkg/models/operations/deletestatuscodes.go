package operations



type DeleteStatusCodesPathParams struct {
    Codes string `pathParam:"style=simple,explode=false,name=codes"`
    
}

type DeleteStatusCodesRequest struct {
    PathParams DeleteStatusCodesPathParams 
    
}

type DeleteStatusCodesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

