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
	Code      *string `json:"Code,omitempty"`
	Converted *string `json:"Converted,omitempty"`
	Credits   *string `json:"Credits,omitempty"`
	Currency  *string `json:"Currency,omitempty"`
}

type ConvertcurrencyResponse struct {
	ContentType                             string
	StatusCode                              int64
	Convertcurrency200ApplicationJSONObject *Convertcurrency200ApplicationJSON
}
