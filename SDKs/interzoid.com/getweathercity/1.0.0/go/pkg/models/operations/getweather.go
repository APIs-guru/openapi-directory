package operations

type GetweatherQueryParams struct {
	City    string `queryParam:"style=form,explode=true,name=city"`
	License string `queryParam:"style=form,explode=true,name=license"`
	State   string `queryParam:"style=form,explode=true,name=state"`
}

type GetweatherRequest struct {
	QueryParams GetweatherQueryParams
}

type Getweather200ApplicationJSON struct {
	City             *string `json:"City,omitempty"`
	Code             *string `json:"Code,omitempty"`
	Credits          *string `json:"Credits,omitempty"`
	RelativeHumidity *string `json:"RelativeHumidity,omitempty"`
	State            *string `json:"State,omitempty"`
	TempC            *string `json:"TempC,omitempty"`
	TempF            *string `json:"TempF,omitempty"`
	VisibilityMiles  *string `json:"VisibilityMiles,omitempty"`
	Weather          *string `json:"Weather,omitempty"`
	WindDir          *string `json:"WindDir,omitempty"`
	WindMph          *string `json:"WindMPH,omitempty"`
}

type GetweatherResponse struct {
	ContentType                        string
	StatusCode                         int64
	Getweather200ApplicationJSONObject *Getweather200ApplicationJSON
}
