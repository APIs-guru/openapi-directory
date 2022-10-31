package operations

type TestnetGetAddressBalancePathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type TestnetGetAddressBalanceRequest struct {
	PathParams TestnetGetAddressBalancePathParams
}

type TestnetGetAddressBalanceResponse struct {
	ContentType               string
	StatusCode                int64
	GetAddressBalanceResponse *float64
}
