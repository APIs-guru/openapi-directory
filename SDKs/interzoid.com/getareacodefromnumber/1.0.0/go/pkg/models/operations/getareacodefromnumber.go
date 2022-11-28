package operations

type GetareacodefromnumberQueryParams struct {
	License string `queryParam:"style=form,explode=true,name=license"`
	Number  string `queryParam:"style=form,explode=true,name=number"`
}

type Getareacodefromnumber200ApplicationJSON struct {
	Abbreviation *string `json:"Abbreviation,omitempty"`
	AreaCode     *string `json:"AreaCode,omitempty"`
	Code         *string `json:"Code,omitempty"`
	Credits      *string `json:"Credits,omitempty"`
	Locale       *string `json:"Locale,omitempty"`
	PrimaryCity  *string `json:"PrimaryCity,omitempty"`
}

type GetareacodefromnumberRequest struct {
	QueryParams GetareacodefromnumberQueryParams
}

type GetareacodefromnumberResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	Getareacodefromnumber200ApplicationJSONObject *Getareacodefromnumber200ApplicationJSON
}
