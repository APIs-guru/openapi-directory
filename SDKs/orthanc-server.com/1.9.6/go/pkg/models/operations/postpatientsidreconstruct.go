package operations

type PostPatientsIDReconstructPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostPatientsIDReconstructRequest struct {
	PathParams PostPatientsIDReconstructPathParams
}

type PostPatientsIDReconstructResponse struct {
	ContentType string
	StatusCode  int64
}
