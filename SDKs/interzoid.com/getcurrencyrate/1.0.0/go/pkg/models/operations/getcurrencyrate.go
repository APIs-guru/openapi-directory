package operations

type GetcurrencyrateQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Symbol  string `queryParam:"style=form,explode=true,name=symbol"`
}

type Getcurrencyrate200ApplicationJSON struct {
	Code    *string `json:"Code,omitempty"`
	Country *string `json:"Country,omitempty"`
	Credits *string `json:"Credits,omitempty"`
	Name    *string `json:"Name,omitempty"`
	Rate    *string `json:"Rate,omitempty"`
	Symbol  *string `json:"Symbol,omitempty"`
}

type GetcurrencyrateRequest struct {
	QueryParams GetcurrencyrateQueryParams
}

type GetcurrencyrateResponse struct {
	ContentType                             string
	StatusCode                              int64
	Getcurrencyrate200ApplicationJSONObject *Getcurrencyrate200ApplicationJSON
}
