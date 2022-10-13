package operations

type GetcountrystandardQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
	License string `queryParam:"style=form,explode=true,name=license"`
}

type GetcountrystandardRequest struct {
	QueryParams GetcountrystandardQueryParams
}

type Getcountrystandard200ApplicationJSON struct {
	Code            *string `json:"Code"`
	CountryStandard *string `json:"CountryStandard"`
	Credits         *string `json:"Credits"`
}

type GetcountrystandardResponse struct {
	ContentType                                string
	StatusCode                                 int64
	Getcountrystandard200ApplicationJSONObject *Getcountrystandard200ApplicationJSON
}
