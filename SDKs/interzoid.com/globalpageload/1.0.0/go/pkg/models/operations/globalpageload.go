package operations



type GlobalpageloadQueryParams struct {
    License string `queryParam:"style=form,explode=true,name=license"`
    Origin string `queryParam:"style=form,explode=true,name=origin"`
    URL string `queryParam:"style=form,explode=true,name=url"`
    
}

type GlobalpageloadRequest struct {
    QueryParams GlobalpageloadQueryParams 
    
}

type Globalpageload200ApplicationJSON struct {
    Code *string `json:"Code,omitempty"`
    Contents *string `json:"Contents,omitempty"`
    Credits *string `json:"Credits,omitempty"`
    Origin *string `json:"Origin,omitempty"`
    PageResponseStatus *string `json:"PageResponseStatus,omitempty"`
    Seconds *string `json:"Seconds,omitempty"`
    
}

type GlobalpageloadResponse struct {
    ContentType string 
    StatusCode int64 
    Globalpageload200ApplicationJSONObject *Globalpageload200ApplicationJSON 
    
}

