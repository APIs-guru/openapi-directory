package operations



type PostSeriesIDMediaPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostSeriesIDMediaRequest struct {
    PathParams PostSeriesIDMediaPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PostSeriesIDMediaResponse struct {
    Body []byte 
    ContentType string 
    PostSeriesIDMedia200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

