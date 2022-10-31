package operations

type GetareacodeQueryParams struct {
	Areacode string `queryParam:"style=form,explode=true,name=areacode"`
	License  string `queryParam:"style=form,explode=true,name=license"`
}

type GetareacodeRequest struct {
	QueryParams GetareacodeQueryParams
}

type Getareacode200ApplicationJSON struct {
	Abbreviation *string `json:"Abbreviation,omitempty"`
	AreaCode     *string `json:"AreaCode,omitempty"`
	Code         *string `json:"Code,omitempty"`
	Credits      *string `json:"Credits,omitempty"`
	Locale       *string `json:"Locale,omitempty"`
	PrimaryCity  *string `json:"PrimaryCity,omitempty"`
}

type GetareacodeResponse struct {
	ContentType                         string
	StatusCode                          int64
	Getareacode200ApplicationJSONObject *Getareacode200ApplicationJSON
}
