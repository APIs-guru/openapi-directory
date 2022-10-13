package operations

type GetCookiesDeleteQueryParams struct {
	Freeform *string `queryParam:"style=form,explode=true,name=freeform"`
}

type GetCookiesDeleteRequest struct {
	QueryParams GetCookiesDeleteQueryParams
}

type GetCookiesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
