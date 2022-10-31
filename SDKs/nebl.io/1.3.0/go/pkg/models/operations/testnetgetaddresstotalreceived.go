package operations

type TestnetGetAddressTotalReceivedPathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type TestnetGetAddressTotalReceivedRequest struct {
	PathParams TestnetGetAddressTotalReceivedPathParams
}

type TestnetGetAddressTotalReceivedResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetAddressTotalReceivedResponse *float64
}
