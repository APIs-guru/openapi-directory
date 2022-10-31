package operations

type GetCookiesSetQueryParams struct {
	Freeform *string `queryParam:"style=form,explode=true,name=freeform"`
}

type GetCookiesSetRequest struct {
	QueryParams GetCookiesSetQueryParams
}

type GetCookiesSetResponse struct {
	ContentType string
	StatusCode  int64
}
