package operations



type GetGeneralImagePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Type string `pathParam:"style=simple,explode=false,name=type"`
    
}

type GetGeneralImageRequest struct {
    PathParams GetGeneralImagePathParams 
    
}

type GetGeneralImageResponse struct {
    Body []byte 
    ContentType string 
    GetGeneralImage200ImageWildcardBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

