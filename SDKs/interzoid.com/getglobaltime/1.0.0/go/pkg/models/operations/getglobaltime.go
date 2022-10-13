package operations

type GetglobaltimeQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Locale  string `queryParam:"style=form,explode=true,name=locale"`
}

type GetglobaltimeRequest struct {
	QueryParams GetglobaltimeQueryParams
}

type Getglobaltime200ApplicationJSON struct {
	ClockTime   *string `json:"ClockTime"`
	Code        *string `json:"Code"`
	Credits     *string `json:"Credits"`
	CurrentDate *string `json:"CurrentDate"`
	CurrentTime *string `json:"CurrentTime"`
	Day         *string `json:"Day"`
	Hour        *string `json:"Hour"`
	Locale      *string `json:"Locale"`
	Minute      *string `json:"Minute"`
	Month       *string `json:"Month"`
	MonthNumber *string `json:"MonthNumber"`
	Second      *string `json:"Second"`
	TimeStamp   *string `json:"TimeStamp"`
	Weekday     *string `json:"Weekday"`
	Year        *string `json:"Year"`
	Zone        *string `json:"Zone"`
}

type GetglobaltimeResponse struct {
	ContentType                           string
	StatusCode                            int64
	Getglobaltime200ApplicationJSONObject *Getglobaltime200ApplicationJSON
}
