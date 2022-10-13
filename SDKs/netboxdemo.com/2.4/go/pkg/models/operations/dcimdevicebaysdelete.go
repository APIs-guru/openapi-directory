package operations

type DcimDeviceBaysDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceBaysDeleteRequest struct {
	PathParams DcimDeviceBaysDeletePathParams
}

type DcimDeviceBaysDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
