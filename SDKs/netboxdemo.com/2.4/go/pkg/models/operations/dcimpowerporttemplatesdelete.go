package operations

type DcimPowerPortTemplatesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerPortTemplatesDeleteRequest struct {
	PathParams DcimPowerPortTemplatesDeletePathParams
}

type DcimPowerPortTemplatesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
