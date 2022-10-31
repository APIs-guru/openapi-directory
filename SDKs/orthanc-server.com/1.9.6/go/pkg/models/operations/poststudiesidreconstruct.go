package operations

type PostStudiesIDReconstructPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostStudiesIDReconstructRequest struct {
	PathParams PostStudiesIDReconstructPathParams
}

type PostStudiesIDReconstructResponse struct {
	ContentType string
	StatusCode  int64
}
