package operations

type GetareacodefromnumberQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Number  string `queryParam:"style=form,explode=true,name=number"`
}

type GetareacodefromnumberRequest struct {
	QueryParams GetareacodefromnumberQueryParams
}

type Getareacodefromnumber200ApplicationJSON struct {
	Abbreviation *string `json:"Abbreviation"`
	AreaCode     *string `json:"AreaCode"`
	Code         *string `json:"Code"`
	Credits      *string `json:"Credits"`
	Locale       *string `json:"Locale"`
	PrimaryCity  *string `json:"PrimaryCity"`
}

type GetareacodefromnumberResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	Getareacodefromnumber200ApplicationJSONObject *Getareacodefromnumber200ApplicationJSON
}
