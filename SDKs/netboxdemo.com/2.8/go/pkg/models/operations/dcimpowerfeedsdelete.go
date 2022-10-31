package operations

type DcimPowerFeedsDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimPowerFeedsDeleteRequest struct {
	PathParams DcimPowerFeedsDeletePathParams
}

type DcimPowerFeedsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
