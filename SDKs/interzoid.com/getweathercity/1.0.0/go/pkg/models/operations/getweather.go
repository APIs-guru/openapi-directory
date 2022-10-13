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
	City             *string `json:"City"`
	Code             *string `json:"Code"`
	Credits          *string `json:"Credits"`
	RelativeHumidity *string `json:"RelativeHumidity"`
	State            *string `json:"State"`
	TempC            *string `json:"TempC"`
	TempF            *string `json:"TempF"`
	VisibilityMiles  *string `json:"VisibilityMiles"`
	Weather          *string `json:"Weather"`
	WindDir          *string `json:"WindDir"`
	WindMph          *string `json:"WindMPH"`
}

type GetweatherResponse struct {
	ContentType                        string
	StatusCode                         int64
	Getweather200ApplicationJSONObject *Getweather200ApplicationJSON
}
