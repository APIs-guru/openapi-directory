package operations

type GetInstancesIDContentPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDContentQueryParams struct {
	Dot string `queryParam:"style=form,explode=true,name=..."`
}

type GetInstancesIDContentRequest struct {
	PathParams  GetInstancesIDContentPathParams
	QueryParams GetInstancesIDContentQueryParams
}

type GetInstancesIDContentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
