package operations



type GetApplicationPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetApplicationRequest struct {
    PathParams GetApplicationPathParams 
    
}

type GetApplicationResponse struct {
    ApplicationResponse *interface{} 
    ContentType string 
    StatusCode int64 
    GetApplication401ApplicationJSONAny *interface{} 
    GetApplication404ApplicationJSONAny *interface{} 
    GetApplication405ApplicationJSONAny *interface{} 
    GetApplication406ApplicationJSONAny *interface{} 
    
}

