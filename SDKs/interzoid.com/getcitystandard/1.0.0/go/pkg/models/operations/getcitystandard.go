package operations



type GetcitystandardQueryParams struct {
    City string `queryParam:"style=form,explode=true,name=city"`
    License string `queryParam:"style=form,explode=true,name=license"`
    
}

type GetcitystandardRequest struct {
    QueryParams GetcitystandardQueryParams 
    
}

type Getcitystandard200ApplicationJSON struct {
    CityStandard *string `json:"CityStandard,omitempty"`
    Code *string `json:"Code,omitempty"`
    Credits *string `json:"Credits,omitempty"`
    
}

type GetcitystandardResponse struct {
    ContentType string 
    StatusCode int64 
    Getcitystandard200ApplicationJSONObject *Getcitystandard200ApplicationJSON 
    
}

