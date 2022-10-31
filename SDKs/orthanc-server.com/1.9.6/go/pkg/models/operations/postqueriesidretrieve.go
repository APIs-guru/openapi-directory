package operations



type PostQueriesIDRetrievePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostQueriesIDRetrieveRequests struct {
    Any *interface{} `request:"mediaType=application/json"`
    TextPlain []byte `request:"mediaType=text/plain"`
    
}

type PostQueriesIDRetrieveRequest struct {
    PathParams PostQueriesIDRetrievePathParams 
    Request *PostQueriesIDRetrieveRequests 
    
}

type PostQueriesIDRetrieveResponse struct {
    ContentType string 
    PostQueriesIDRetrieve200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

