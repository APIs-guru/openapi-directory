package operations

type GetcitymatchQueryParams struct {
	City    string `queryParam:"style=form,explode=true,name=city"`
	License string `queryParam:"style=form,explode=true,name=license"`
}

type GetcitymatchRequest struct {
	QueryParams GetcitymatchQueryParams
}

type Getcitymatch200ApplicationJSON struct {
	Code    *string `json:"Code,omitempty"`
	Credits *string `json:"Credits,omitempty"`
	Simkey  *string `json:"Simkey,omitempty"`
}

type GetcitymatchResponse struct {
	ContentType                          string
	StatusCode                           int64
	Getcitymatch200ApplicationJSONObject *Getcitymatch200ApplicationJSON
}
