package operations



type GetTrackingSnippetQueryParams struct {
    Domain string `queryParam:"style=form,explode=true,name=domain"`
    
}

type GetTrackingSnippetRequest struct {
    QueryParams GetTrackingSnippetQueryParams 
    
}

type GetTrackingSnippet200ApplicationJSONData struct {
    Domain string `json:"domain"`
    Snippet string `json:"snippet"`
    
}

type GetTrackingSnippet200ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetTrackingSnippet200ApplicationJSON struct {
    Data GetTrackingSnippet200ApplicationJSONData `json:"data"`
    Meta GetTrackingSnippet200ApplicationJSONMeta `json:"meta"`
    
}

type GetTrackingSnippet400ApplicationJSONErrorsParameters struct {
    Header map[string]string `json:"header,omitempty"`
    Path map[string]string `json:"path,omitempty"`
    Query map[string]string `json:"query,omitempty"`
    
}

type GetTrackingSnippet400ApplicationJSONErrors struct {
    Fields map[string]string `json:"fields,omitempty"`
    Parameters *GetTrackingSnippet400ApplicationJSONErrorsParameters `json:"parameters,omitempty"`
    
}

type GetTrackingSnippet400ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetTrackingSnippet400ApplicationJSON struct {
    Errors GetTrackingSnippet400ApplicationJSONErrors `json:"errors"`
    Message string `json:"message"`
    Meta GetTrackingSnippet400ApplicationJSONMeta `json:"meta"`
    
}

type GetTrackingSnippet401ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetTrackingSnippet401ApplicationJSON struct {
    Message string `json:"message"`
    Meta GetTrackingSnippet401ApplicationJSONMeta `json:"meta"`
    
}

type GetTrackingSnippet403ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetTrackingSnippet403ApplicationJSON struct {
    Message string `json:"message"`
    Meta GetTrackingSnippet403ApplicationJSONMeta `json:"meta"`
    
}

type GetTrackingSnippet404ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetTrackingSnippet404ApplicationJSON struct {
    Message string `json:"message"`
    Meta GetTrackingSnippet404ApplicationJSONMeta `json:"meta"`
    
}

type GetTrackingSnippet429ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetTrackingSnippet429ApplicationJSON struct {
    Message string `json:"message"`
    Meta GetTrackingSnippet429ApplicationJSONMeta `json:"meta"`
    
}

type GetTrackingSnippet500ApplicationJSONMeta struct {
    RequestID string `json:"requestId"`
    Status float64 `json:"status"`
    
}

type GetTrackingSnippet500ApplicationJSON struct {
    Message string `json:"message"`
    Meta GetTrackingSnippet500ApplicationJSONMeta `json:"meta"`
    
}

type GetTrackingSnippetResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    GetTrackingSnippet200ApplicationJSONObject *GetTrackingSnippet200ApplicationJSON 
    GetTrackingSnippet400ApplicationJSONObject *GetTrackingSnippet400ApplicationJSON 
    GetTrackingSnippet401ApplicationJSONObject *GetTrackingSnippet401ApplicationJSON 
    GetTrackingSnippet403ApplicationJSONObject *GetTrackingSnippet403ApplicationJSON 
    GetTrackingSnippet404ApplicationJSONObject *GetTrackingSnippet404ApplicationJSON 
    GetTrackingSnippet429ApplicationJSONObject *GetTrackingSnippet429ApplicationJSON 
    GetTrackingSnippet500ApplicationJSONObject *GetTrackingSnippet500ApplicationJSON 
    
}

