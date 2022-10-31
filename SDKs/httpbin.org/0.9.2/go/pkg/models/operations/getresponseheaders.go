package operations

type GetResponseHeadersQueryParams struct {
	Freeform *string `queryParam:"style=form,explode=true,name=freeform"`
}

type GetResponseHeadersRequest struct {
	QueryParams GetResponseHeadersQueryParams
}

type GetResponseHeadersResponse struct {
	ContentType string
	StatusCode  int64
}
