package operations

type GetActionRelatedListQueryParams struct {
	Dataset    *string `queryParam:"style=form,explode=true,name=dataset"`
	Featured   *string `queryParam:"style=form,explode=true,name=featured"`
	ID         *string `queryParam:"style=form,explode=true,name=id"`
	Sort       *string `queryParam:"style=form,explode=true,name=sort"`
	TypeFilter *string `queryParam:"style=form,explode=true,name=type_filter"`
}

type GetActionRelatedListRequest struct {
	QueryParams GetActionRelatedListQueryParams
}

type GetActionRelatedListResponse struct {
	ContentType string
	StatusCode  int64
}
