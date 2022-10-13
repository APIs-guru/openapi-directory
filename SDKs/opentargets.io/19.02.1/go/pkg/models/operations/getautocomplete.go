package operations

type GetAutocompleteQueryParams struct {
	Q    string  `queryParam:"style=form,explode=true,name=q"`
	Size *string `queryParam:"style=form,explode=true,name=size"`
}

type GetAutocompleteRequest struct {
	QueryParams GetAutocompleteQueryParams
}

type GetAutocompleteResponse struct {
	ContentType string
	StatusCode  int64
}
