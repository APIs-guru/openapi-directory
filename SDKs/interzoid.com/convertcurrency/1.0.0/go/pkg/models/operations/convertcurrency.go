package operations

type ConvertcurrencyQueryParams struct {
	Amount  string `queryParam:"style=form,explode=true,name=amount"`
	From    string `queryParam:"style=form,explode=true,name=from"`
	License string `queryParam:"style=form,explode=true,name=license"`
	To      string `queryParam:"style=form,explode=true,name=to"`
}

type ConvertcurrencyRequest struct {
	QueryParams ConvertcurrencyQueryParams
}

type Convertcurrency200ApplicationJSON struct {
	Code      *string `json:"Code"`
	Converted *string `json:"Converted"`
	Credits   *string `json:"Credits"`
	Currency  *string `json:"Currency"`
}

type ConvertcurrencyResponse struct {
	ContentType                             string
	StatusCode                              int64
	Convertcurrency200ApplicationJSONObject *Convertcurrency200ApplicationJSON
}
