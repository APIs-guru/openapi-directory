package operations



type GetMediaInfoImagePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    Theme string `pathParam:"style=simple,explode=false,name=theme"`
    
}

type GetMediaInfoImageRequest struct {
    PathParams GetMediaInfoImagePathParams 
    
}

type GetMediaInfoImageResponse struct {
    Body []byte 
    ContentType string 
    GetMediaInfoImage200ImageWildcardBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

