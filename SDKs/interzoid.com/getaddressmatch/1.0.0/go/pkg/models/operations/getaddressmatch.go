package operations



type GetaddressmatchQueryParams struct {
    Address string `queryParam:"style=form,explode=true,name=address"`
    License string `queryParam:"style=form,explode=true,name=license"`
    
}

type GetaddressmatchRequest struct {
    QueryParams GetaddressmatchQueryParams 
    
}

type Getaddressmatch200ApplicationJSON struct {
    Code *string `json:"Code,omitempty"`
    Credits *string `json:"Credits,omitempty"`
    Simkey *string `json:"Simkey,omitempty"`
    
}

type GetaddressmatchResponse struct {
    ContentType string 
    StatusCode int64 
    Getaddressmatch200ApplicationJSONObject *Getaddressmatch200ApplicationJSON 
    
}

