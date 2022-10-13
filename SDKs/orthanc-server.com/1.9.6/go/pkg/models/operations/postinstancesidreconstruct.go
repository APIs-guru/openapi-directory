package operations

type PostInstancesIDReconstructPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostInstancesIDReconstructRequest struct {
	PathParams PostInstancesIDReconstructPathParams
}

type PostInstancesIDReconstructResponse struct {
	ContentType string
	StatusCode  int64
}
