package operations

type DcimVirtualChassisDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimVirtualChassisDeleteRequest struct {
	PathParams DcimVirtualChassisDeletePathParams
}

type DcimVirtualChassisDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
