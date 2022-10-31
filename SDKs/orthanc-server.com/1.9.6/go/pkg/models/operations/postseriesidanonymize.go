package operations



type PostSeriesIDAnonymizePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostSeriesIDAnonymizeRequest struct {
    PathParams PostSeriesIDAnonymizePathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostSeriesIDAnonymizeResponse struct {
    ContentType string 
    PostSeriesIDAnonymize200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

