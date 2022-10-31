package operations

type DeleteFloatingIpsIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteFloatingIpsIDRequest struct {
	PathParams DeleteFloatingIpsIDPathParams
}

type DeleteFloatingIpsIDResponse struct {
	ContentType string
	StatusCode  int64
}
