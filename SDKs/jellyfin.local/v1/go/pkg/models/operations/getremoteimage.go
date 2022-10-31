package operations



type GetRemoteImageQueryParams struct {
    ImageURL string `queryParam:"style=form,explode=true,name=imageUrl"`
    
}

type GetRemoteImageRequest struct {
    QueryParams GetRemoteImageQueryParams 
    
}

type GetRemoteImageResponse struct {
    Body []byte 
    ContentType string 
    GetRemoteImage200ImageWildcardBinaryString []byte 
    ProblemDetails map[string]interface{} 
    StatusCode int64 
    
}

