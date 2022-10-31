package operations



type GetAllAnnotatedGenesUsingGetPathParams struct {
    AccID string `pathParam:"style=simple,explode=false,name=accId"`
    
}

type GetAllAnnotatedGenesUsingGetRequest struct {
    PathParams GetAllAnnotatedGenesUsingGetPathParams 
    
}

type GetAllAnnotatedGenesUsingGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

