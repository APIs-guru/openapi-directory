package operations



type PostStatusCodesPathParams struct {
    Codes string `pathParam:"style=simple,explode=false,name=codes"`
    
}

type PostStatusCodesRequest struct {
    PathParams PostStatusCodesPathParams 
    
}

type PostStatusCodesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

