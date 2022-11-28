package operations

type GetstateabbreviationQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	State   string `queryParam:"style=form,explode=true,name=state"`
}

type Getstateabbreviation200ApplicationJSON struct {
	Abbreviation *string `json:"Abbreviation,omitempty"`
	Code         *string `json:"Code,omitempty"`
	Credits      *string `json:"Credits,omitempty"`
	State        *string `json:"State,omitempty"`
}

type GetstateabbreviationRequest struct {
	QueryParams GetstateabbreviationQueryParams
}

type GetstateabbreviationResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	Getstateabbreviation200ApplicationJSONObject *Getstateabbreviation200ApplicationJSON
}
