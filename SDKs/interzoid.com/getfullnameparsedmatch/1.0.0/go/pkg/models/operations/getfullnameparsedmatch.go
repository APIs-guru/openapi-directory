package operations

type GetfullnameparsedmatchQueryParams struct {
	Firstname string `queryParam:"style=form,explode=true,name=firstname"`
	Lastname  string `queryParam:"style=form,explode=true,name=lastname"`
	License   string `queryParam:"style=form,explode=true,name=license"`
}

type GetfullnameparsedmatchRequest struct {
	QueryParams GetfullnameparsedmatchQueryParams
}

type Getfullnameparsedmatch200ApplicationJSON struct {
	Code    *string `json:"Code"`
	Credits *string `json:"Credits"`
	Simkey  *string `json:"Simkey"`
}

type GetfullnameparsedmatchResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	Getfullnameparsedmatch200ApplicationJSONObject *Getfullnameparsedmatch200ApplicationJSON
}
