package operations

type GetglobaltimeQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Locale  string `queryParam:"style=form,explode=true,name=locale"`
}

type Getglobaltime200ApplicationJSON struct {
	ClockTime   *string `json:"ClockTime,omitempty"`
	Code        *string `json:"Code,omitempty"`
	Credits     *string `json:"Credits,omitempty"`
	CurrentDate *string `json:"CurrentDate,omitempty"`
	CurrentTime *string `json:"CurrentTime,omitempty"`
	Day         *string `json:"Day,omitempty"`
	Hour        *string `json:"Hour,omitempty"`
	Locale      *string `json:"Locale,omitempty"`
	Minute      *string `json:"Minute,omitempty"`
	Month       *string `json:"Month,omitempty"`
	MonthNumber *string `json:"MonthNumber,omitempty"`
	Second      *string `json:"Second,omitempty"`
	TimeStamp   *string `json:"TimeStamp,omitempty"`
	Weekday     *string `json:"Weekday,omitempty"`
	Year        *string `json:"Year,omitempty"`
	Zone        *string `json:"Zone,omitempty"`
}

type GetglobaltimeRequest struct {
	QueryParams GetglobaltimeQueryParams
}

type GetglobaltimeResponse struct {
	ContentType                           string
	StatusCode                            int64
	Getglobaltime200ApplicationJSONObject *Getglobaltime200ApplicationJSON
}
