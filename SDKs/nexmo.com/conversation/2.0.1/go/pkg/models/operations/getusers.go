package operations



type GetUsers200ApplicationJSON struct {
    Href *string `json:"href,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type GetUsersResponse struct {
    ContentType string 
    StatusCode int64 
    GetUsers200ApplicationJSONObjects []GetUsers200ApplicationJSON 
    
}

