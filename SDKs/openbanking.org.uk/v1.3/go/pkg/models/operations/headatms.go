package operations



type HeadAtmsHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type HeadAtmsRequest struct {
    Headers HeadAtmsHeaders 
    
}

type HeadAtmsResponse struct {
    ContentType string 
    NoResponse map[string]interface{} 
    StatusCode int64 
    
}

