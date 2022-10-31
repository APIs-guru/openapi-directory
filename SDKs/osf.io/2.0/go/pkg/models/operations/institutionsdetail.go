package operations

type InstitutionsDetailPathParams struct {
	InstitutionID string `pathParam:"style=simple,explode=false,name=institution_id"`
}

type InstitutionsDetailRequest struct {
	PathParams InstitutionsDetailPathParams
}

type InstitutionsDetailResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
