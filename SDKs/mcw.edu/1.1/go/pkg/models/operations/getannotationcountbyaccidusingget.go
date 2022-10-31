package operations



type GetAnnotationCountByAccIDUsingGetPathParams struct {
    AccID string `pathParam:"style=simple,explode=false,name=accId"`
    IncludeChildren bool `pathParam:"style=simple,explode=false,name=includeChildren"`
    
}

type GetAnnotationCountByAccIDUsingGetRequest struct {
    PathParams GetAnnotationCountByAccIDUsingGetPathParams 
    
}

type GetAnnotationCountByAccIDUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

