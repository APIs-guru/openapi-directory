package operations

type GetareacodeQueryParams struct {
	Areacode string `queryParam:"style=form,explode=true,name=areacode"`
	License  string `queryParam:"style=form,explode=true,name=license"`
}

type GetareacodeRequest struct {
	QueryParams GetareacodeQueryParams
}

type Getareacode200ApplicationJSON struct {
	Abbreviation *string `json:"Abbreviation"`
	AreaCode     *string `json:"AreaCode"`
	Code         *string `json:"Code"`
	Credits      *string `json:"Credits"`
	Locale       *string `json:"Locale"`
	PrimaryCity  *string `json:"PrimaryCity"`
}

type GetareacodeResponse struct {
	ContentType                         string
	StatusCode                          int64
	Getareacode200ApplicationJSONObject *Getareacode200ApplicationJSON
}
