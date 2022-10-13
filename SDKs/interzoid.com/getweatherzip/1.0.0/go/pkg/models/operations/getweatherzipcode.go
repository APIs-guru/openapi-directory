package operations

type GetweatherzipcodeQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Zip     string `queryParam:"style=form,explode=true,name=zip"`
}

type GetweatherzipcodeRequest struct {
	QueryParams GetweatherzipcodeQueryParams
}

type Getweatherzipcode200ApplicationJSON struct {
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

type GetweatherzipcodeResponse struct {
	ContentType                               string
	StatusCode                                int64
	Getweatherzipcode200ApplicationJSONObject *Getweatherzipcode200ApplicationJSON
}
