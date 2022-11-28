package operations

type GetcountrymatchQueryParams struct {
	Country string `queryParam:"style=form,explode=true,name=country"`
	License string `queryParam:"style=form,explode=true,name=license"`
}

type Getcountrymatch200ApplicationJSON struct {
	Code    *string `json:"Code,omitempty"`
	Credits *string `json:"Credits,omitempty"`
	Simkey  *string `json:"Simkey,omitempty"`
}

type GetcountrymatchRequest struct {
	QueryParams GetcountrymatchQueryParams
}

type GetcountrymatchResponse struct {
	ContentType                             string
	StatusCode                              int64
	Getcountrymatch200ApplicationJSONObject *Getcountrymatch200ApplicationJSON
}
