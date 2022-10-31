package operations

type GetStripeGatewayUserUserIDCardsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetStripeGatewayUserUserIDCardsRequest struct {
	PathParams GetStripeGatewayUserUserIDCardsPathParams
}

type GetStripeGatewayUserUserIDCardsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
