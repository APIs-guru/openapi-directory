package operations

type DcimDeviceTypesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceTypesDeleteRequest struct {
	PathParams DcimDeviceTypesDeletePathParams
}

type DcimDeviceTypesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
