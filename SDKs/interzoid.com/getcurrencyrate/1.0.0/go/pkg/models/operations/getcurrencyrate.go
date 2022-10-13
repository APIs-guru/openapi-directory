package operations

type GetcurrencyrateQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Symbol  string `queryParam:"style=form,explode=true,name=symbol"`
}

type GetcurrencyrateRequest struct {
	QueryParams GetcurrencyrateQueryParams
}

type Getcurrencyrate200ApplicationJSON struct {
	Code    *string `json:"Code"`
	Country *string `json:"Country"`
	Credits *string `json:"Credits"`
	Name    *string `json:"Name"`
	Rate    *string `json:"Rate"`
	Symbol  *string `json:"Symbol"`
}

type GetcurrencyrateResponse struct {
	ContentType                             string
	StatusCode                              int64
	Getcurrencyrate200ApplicationJSONObject *Getcurrencyrate200ApplicationJSON
}
