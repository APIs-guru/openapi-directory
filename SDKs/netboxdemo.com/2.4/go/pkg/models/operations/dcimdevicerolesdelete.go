package operations

type DcimDeviceRolesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimDeviceRolesDeleteRequest struct {
	PathParams DcimDeviceRolesDeletePathParams
}

type DcimDeviceRolesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
