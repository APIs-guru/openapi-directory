package operations

type GetActionOrganizationAutocompleteQueryParams struct {
	Limit *int64  `queryParam:"style=form,explode=true,name=limit"`
	Q     *string `queryParam:"style=form,explode=true,name=q"`
}

type GetActionOrganizationAutocompleteRequest struct {
	QueryParams GetActionOrganizationAutocompleteQueryParams
}

type GetActionOrganizationAutocompleteResponse struct {
	ContentType string
	StatusCode  int64
}
