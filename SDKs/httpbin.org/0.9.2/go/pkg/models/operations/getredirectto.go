package operations

type GetRedirectToQueryParams struct {
	StatusCode *int64 `queryParam:"style=form,explode=true,name=status_code"`
	URL        string `queryParam:"style=form,explode=true,name=url"`
}

type GetRedirectToRequest struct {
	QueryParams GetRedirectToQueryParams
}

type GetRedirectToResponse struct {
	ContentType string
	StatusCode  int64
}
