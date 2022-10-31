package operations



type HeadPersonalCurrentAccountsHeaders struct {
    IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
    IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
    
}

type HeadPersonalCurrentAccountsRequest struct {
    Headers HeadPersonalCurrentAccountsHeaders 
    
}

type HeadPersonalCurrentAccountsResponse struct {
    ContentType string 
    NoResponse map[string]interface{} 
    StatusCode int64 
    
}

