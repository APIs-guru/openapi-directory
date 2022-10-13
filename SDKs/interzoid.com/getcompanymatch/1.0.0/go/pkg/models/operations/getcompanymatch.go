package operations

type GetcompanymatchQueryParams struct {
	Company string `queryParam:"style=form,explode=true,name=company"`
	License string `queryParam:"style=form,explode=true,name=license"`
}

type GetcompanymatchRequest struct {
	QueryParams GetcompanymatchQueryParams
}

type Getcompanymatch200ApplicationJSON struct {
	Code    *string `json:"Code"`
	Credits *string `json:"Credits"`
	Simkey  *string `json:"Simkey"`
}

type GetcompanymatchResponse struct {
	ContentType                             string
	StatusCode                              int64
	Getcompanymatch200ApplicationJSONObject *Getcompanymatch200ApplicationJSON
}
