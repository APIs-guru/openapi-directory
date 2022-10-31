package operations

type DcimPowerPanelsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerPanelsDeleteRequest struct {
	PathParams DcimPowerPanelsDeletePathParams
}

type DcimPowerPanelsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
