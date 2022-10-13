package operations

type GetstateabbreviationQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	State   string `queryParam:"style=form,explode=true,name=state"`
}

type GetstateabbreviationRequest struct {
	QueryParams GetstateabbreviationQueryParams
}

type Getstateabbreviation200ApplicationJSON struct {
	Abbreviation *string `json:"Abbreviation"`
	Code         *string `json:"Code"`
	Credits      *string `json:"Credits"`
	State        *string `json:"State"`
}

type GetstateabbreviationResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	Getstateabbreviation200ApplicationJSONObject *Getstateabbreviation200ApplicationJSON
}
