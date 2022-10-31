package operations



type GetSeriesIDOrderedSlicesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSeriesIDOrderedSlicesRequest struct {
    PathParams GetSeriesIDOrderedSlicesPathParams 
    
}

type GetSeriesIDOrderedSlicesResponse struct {
    ContentType string 
    GetSeriesIDOrderedSlices200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

