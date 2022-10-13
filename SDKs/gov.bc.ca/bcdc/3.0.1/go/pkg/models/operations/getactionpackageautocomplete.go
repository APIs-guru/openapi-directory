package operations

type GetActionPackageAutocompleteQueryParams struct {
	Limit *int64  `queryParam:"style=form,explode=true,name=limit"`
	Q     *string `queryParam:"style=form,explode=true,name=q"`
}

type GetActionPackageAutocompleteRequest struct {
	QueryParams GetActionPackageAutocompleteQueryParams
}

type GetActionPackageAutocompleteResponse struct {
	ContentType string
	StatusCode  int64
}
