package operations

type GetAddressBalancePathParams struct {
	Address string `pathParam:"style=simple,explode=false,name=address"`
}

type GetAddressBalanceRequest struct {
	PathParams GetAddressBalancePathParams
}

type GetAddressBalanceResponse struct {
	ContentType               string
	StatusCode                int64
	GetAddressBalanceResponse *float64
}
