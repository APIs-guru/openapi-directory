package operations



type DeleteSeriesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteSeriesIDRequest struct {
    PathParams DeleteSeriesIDPathParams 
    
}

type DeleteSeriesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

