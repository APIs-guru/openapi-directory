package operations

type PostSeriesIDReconstructPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSeriesIDReconstructRequest struct {
	PathParams PostSeriesIDReconstructPathParams
}

type PostSeriesIDReconstructResponse struct {
	ContentType string
	StatusCode  int64
}
