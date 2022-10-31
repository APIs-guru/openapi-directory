package operations



type DeleteApplicationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteApplicationRequest struct {
    PathParams DeleteApplicationPathParams 
    
}

type DeleteApplicationResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteApplication401ApplicationJSONAny *interface{} 
    DeleteApplication404ApplicationJSONAny *interface{} 
    DeleteApplication405ApplicationJSONAny *interface{} 
    DeleteApplication406ApplicationJSONAny *interface{} 
    
}

