package operations



type KeysAPIFindPathParams struct {
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type KeysAPIFindRequest struct {
    PathParams KeysAPIFindPathParams 
    
}

type KeysAPIFindResponse struct {
    ContentType string 
    KeysAPIFind200ApplicationJSONOneOf *interface{} 
    StatusCode int64 
    
}

