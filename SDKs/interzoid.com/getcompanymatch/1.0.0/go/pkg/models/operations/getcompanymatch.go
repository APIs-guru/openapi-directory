package operations

type GetcompanymatchQueryParams struct {
	Company string `queryParam:"style=form,explode=true,name=company"`
	License string `queryParam:"style=form,explode=true,name=license"`
}

type Getcompanymatch200ApplicationJSON struct {
	Code    *string `json:"Code,omitempty"`
	Credits *string `json:"Credits,omitempty"`
	Simkey  *string `json:"Simkey,omitempty"`
}

type GetcompanymatchRequest struct {
	QueryParams GetcompanymatchQueryParams
}

type GetcompanymatchResponse struct {
	ContentType                             string
	StatusCode                              int64
	Getcompanymatch200ApplicationJSONObject *Getcompanymatch200ApplicationJSON
}
