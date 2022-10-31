package operations



type GetQueriesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetQueriesIDRequest struct {
    PathParams GetQueriesIDPathParams 
    
}

type GetQueriesIDResponse struct {
    ContentType string 
    GetQueriesID200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

