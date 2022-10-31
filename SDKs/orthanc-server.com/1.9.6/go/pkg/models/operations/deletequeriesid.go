package operations



type DeleteQueriesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteQueriesIDRequest struct {
    PathParams DeleteQueriesIDPathParams 
    
}

type DeleteQueriesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

