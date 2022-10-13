package operations

type GetEvidenceByIDQueryParams struct {
	ID string `queryParam:"style=form,explode=true,name=id"`
}

type GetEvidenceByIDRequest struct {
	QueryParams GetEvidenceByIDQueryParams
}

type GetEvidenceByIDResponse struct {
	ContentType string
	StatusCode  int64
}
