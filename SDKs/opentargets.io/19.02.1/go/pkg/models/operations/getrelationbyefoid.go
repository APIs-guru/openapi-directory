package operations

type GetRelationByEfoidPathParams struct {
	Disease string `pathParam:"style=simple,explode=false,name=disease"`
}

type GetRelationByEfoidRequest struct {
	PathParams GetRelationByEfoidPathParams
}

type GetRelationByEfoidResponse struct {
	ContentType string
	StatusCode  int64
}
