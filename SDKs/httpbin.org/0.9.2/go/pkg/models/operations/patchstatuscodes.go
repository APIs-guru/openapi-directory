package operations



type PatchStatusCodesPathParams struct {
    Codes string `pathParam:"style=simple,explode=false,name=codes"`
    
}

type PatchStatusCodesRequest struct {
    PathParams PatchStatusCodesPathParams 
    
}

type PatchStatusCodesResponse struct {
    ContentType string 
    StatusCode int64 
    
}

