package operations



type GetStatusCodesPathParams struct {
    Codes string `pathParam:"style=simple,explode=false,name=codes"`
    
}

type GetStatusCodesRequest struct {
    PathParams GetStatusCodesPathParams 
    
}

type GetStatusCodesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

