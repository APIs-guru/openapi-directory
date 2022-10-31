package operations



type GetAPIV1RssBillsIDRssPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetAPIV1RssBillsIDRssRequest struct {
    PathParams GetAPIV1RssBillsIDRssPathParams 
    
}

type GetAPIV1RssBillsIDRssResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

