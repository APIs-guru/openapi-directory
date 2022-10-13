package operations

type GlobalpageloadQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Origin  string `queryParam:"style=form,explode=true,name=origin"`
	URL     string `queryParam:"style=form,explode=true,name=url"`
}

type GlobalpageloadRequest struct {
	QueryParams GlobalpageloadQueryParams
}

type Globalpageload200ApplicationJSON struct {
	Code               *string `json:"Code"`
	Contents           *string `json:"Contents"`
	Credits            *string `json:"Credits"`
	Origin             *string `json:"Origin"`
	PageResponseStatus *string `json:"PageResponseStatus"`
	Seconds            *string `json:"Seconds"`
}

type GlobalpageloadResponse struct {
	ContentType                            string
	StatusCode                             int64
	Globalpageload200ApplicationJSONObject *Globalpageload200ApplicationJSON
}
