package operations

type GetcitymatchQueryParams struct {
	City    string `queryParam:"style=form,explode=true,name=city"`
	License string `queryParam:"style=form,explode=true,name=license"`
}

type GetcitymatchRequest struct {
	QueryParams GetcitymatchQueryParams
}

type Getcitymatch200ApplicationJSON struct {
	Code    *string `json:"Code"`
	Credits *string `json:"Credits"`
	Simkey  *string `json:"Simkey"`
}

type GetcitymatchResponse struct {
	ContentType                          string
	StatusCode                           int64
	Getcitymatch200ApplicationJSONObject *Getcitymatch200ApplicationJSON
}
