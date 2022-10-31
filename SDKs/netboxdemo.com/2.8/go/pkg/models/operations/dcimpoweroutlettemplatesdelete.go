package operations

type DcimPowerOutletTemplatesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerOutletTemplatesDeleteRequest struct {
	PathParams DcimPowerOutletTemplatesDeletePathParams
}

type DcimPowerOutletTemplatesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
