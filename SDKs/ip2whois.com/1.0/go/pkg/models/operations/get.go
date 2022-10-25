package operations

type GetQueryParams struct {
	Domain string  `queryParam:"style=form,explode=true,name=domain"`
	Format *string `queryParam:"style=form,explode=true,name=format"`
	Key    string  `queryParam:"style=form,explode=true,name=key"`
}

type GetRequest struct {
	QueryParams GetQueryParams
}

type GetResponse struct {
	ContentType          string
	Get200TextHTMLString *string
	StatusCode           int64
}
