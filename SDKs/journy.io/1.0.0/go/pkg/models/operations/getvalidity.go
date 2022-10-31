package operations



type GetValidity200ApplicationJSONData struct {
    Permissions []string `json:"permissions"`
    
}

type GetValidity200ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetValidity200ApplicationJSON struct {
    Data GetValidity200ApplicationJSONData `json:"data"`
    Meta GetValidity200ApplicationJSONMeta `json:"meta"`
    
}

type GetValidity401ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetValidity401ApplicationJSON struct {
    Message string `json:"message"`
    Meta GetValidity401ApplicationJSONMeta `json:"meta"`
    
}

type GetValidity403ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetValidity403ApplicationJSON struct {
    Message string `json:"message"`
    Meta GetValidity403ApplicationJSONMeta `json:"meta"`
    
}

type GetValidity429ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetValidity429ApplicationJSON struct {
    Message string `json:"message"`
    Meta GetValidity429ApplicationJSONMeta `json:"meta"`
    
}

type GetValidity500ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetValidity500ApplicationJSON struct {
    Message string `json:"message"`
    Meta GetValidity500ApplicationJSONMeta `json:"meta"`
    
}

type GetValidityResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetValidity200ApplicationJSONObject *GetValidity200ApplicationJSON 
    GetValidity401ApplicationJSONObject *GetValidity401ApplicationJSON 
    GetValidity403ApplicationJSONObject *GetValidity403ApplicationJSON 
    GetValidity429ApplicationJSONObject *GetValidity429ApplicationJSON 
    GetValidity500ApplicationJSONObject *GetValidity500ApplicationJSON 
    
}

