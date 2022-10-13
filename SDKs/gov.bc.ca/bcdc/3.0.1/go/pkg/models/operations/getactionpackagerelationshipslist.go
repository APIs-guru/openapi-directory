package operations

type GetActionPackageRelationshipsListQueryParams struct {
	ID  *string `queryParam:"style=form,explode=true,name=id"`
	Id2 *string `queryParam:"style=form,explode=true,name=id2"`
	Rel *string `queryParam:"style=form,explode=true,name=rel"`
}

type GetActionPackageRelationshipsListRequest struct {
	QueryParams GetActionPackageRelationshipsListQueryParams
}

type GetActionPackageRelationshipsListResponse struct {
	ContentType string
	StatusCode  int64
}
