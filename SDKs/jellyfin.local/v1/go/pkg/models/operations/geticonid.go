package operations



type GetIconIDPathParams struct {
    FileName string `pathParam:"style=simple,explode=false,name=fileName"`
    ServerID string `pathParam:"style=simple,explode=false,name=serverId"`
    
}

type GetIconIDRequest struct {
    PathParams GetIconIDPathParams 
    
}

type GetIconIDResponse struct {
    ContentType string 
    GetIconID200ImageWildcardBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

