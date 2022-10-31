package operations



type GetDripQueryParams struct {
    Code *int64 `queryParam:"style=form,explode=true,name=code"`
    Delay *float64 `queryParam:"style=form,explode=true,name=delay"`
    Duration *float64 `queryParam:"style=form,explode=true,name=duration"`
    Numbytes *int64 `queryParam:"style=form,explode=true,name=numbytes"`
    
}

type GetDripRequest struct {
    QueryParams GetDripQueryParams 
    
}

type GetDripResponse struct {
    ContentType string 
    StatusCode int64 
    
}

