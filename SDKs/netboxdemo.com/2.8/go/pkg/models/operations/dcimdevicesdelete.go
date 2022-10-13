package operations

type DcimDevicesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDevicesDeleteRequest struct {
	PathParams DcimDevicesDeletePathParams
}

type DcimDevicesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
