package operations



type GetweatherzipcodeQueryParams struct {
    License string `queryParam:"style=form,explode=true,name=license"`
    Zip string `queryParam:"style=form,explode=true,name=zip"`
    
}

type GetweatherzipcodeRequest struct {
    QueryParams GetweatherzipcodeQueryParams 
    
}

type Getweatherzipcode200ApplicationJSON struct {
    City *string `json:"City,omitempty"`
    Code *string `json:"Code,omitempty"`
    Credits *string `json:"Credits,omitempty"`
    RelativeHumidity *string `json:"RelativeHumidity,omitempty"`
    State *string `json:"State,omitempty"`
    TempC *string `json:"TempC,omitempty"`
    TempF *string `json:"TempF,omitempty"`
    VisibilityMiles *string `json:"VisibilityMiles,omitempty"`
    Weather *string `json:"Weather,omitempty"`
    WindDir *string `json:"WindDir,omitempty"`
    WindMph *string `json:"WindMPH,omitempty"`
    
}

type GetweatherzipcodeResponse struct {
    ContentType string 
    StatusCode int64 
    Getweatherzipcode200ApplicationJSONObject *Getweatherzipcode200ApplicationJSON 
    
}

