package operations

type GetAssociationByIDQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type GetAssociationByIDRequest struct {
	QueryParams GetAssociationByIDQueryParams
}

type GetAssociationByIDResponse struct {
	ContentType string
	StatusCode  int64
}
