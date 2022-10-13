package operations

type GetHealthQueryParams struct {
	Bundles *bool `queryParam:"style=form,explode=true,name=bundles"`
	Plugins *bool `queryParam:"style=form,explode=true,name=plugins"`
}

type GetHealthRequest struct {
	QueryParams GetHealthQueryParams
}

type GetHealthResponse struct {
	ContentType string
	StatusCode  int64
}
