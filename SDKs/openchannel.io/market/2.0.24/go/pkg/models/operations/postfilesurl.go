package operations



type PostFilesURLQueryParams struct {
    IsPrivate *bool `queryParam:"style=form,explode=true,name=isPrivate"`
    URL string `queryParam:"style=form,explode=true,name=url"`
    
}

type PostFilesURLRequest struct {
    QueryParams PostFilesURLQueryParams 
    
}

type PostFilesURLResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

