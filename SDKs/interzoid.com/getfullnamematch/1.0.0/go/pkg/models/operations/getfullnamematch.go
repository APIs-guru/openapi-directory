package operations

type GetfullnamematchQueryParams struct {
	Fullname string `queryParam:"style=form,explode=true,name=fullname"`
	License  string `queryParam:"style=form,explode=true,name=license"`
}

type Getfullnamematch200ApplicationJSON struct {
	Code    *string `json:"Code,omitempty"`
	Credits *string `json:"Credits,omitempty"`
	Simkey  *string `json:"Simkey,omitempty"`
}

type GetfullnamematchRequest struct {
	QueryParams GetfullnamematchQueryParams
}

type GetfullnamematchResponse struct {
	ContentType                              string
	StatusCode                               int64
	Getfullnamematch200ApplicationJSONObject *Getfullnamematch200ApplicationJSON
}
