package operations



type PostResponseHeadersQueryParams struct {
    Freeform *string `queryParam:"style=form,explode=true,name=freeform"`
    
}

type PostResponseHeadersRequest struct {
    QueryParams PostResponseHeadersQueryParams 
    
}

type PostResponseHeadersResponse struct {
    ContentType string 
    StatusCode int64 
    
}

