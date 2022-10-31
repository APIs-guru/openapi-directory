package operations

type DeleteStripeGatewayUserUserIDCardsCardIDPathParams struct {
	CardID string `pathParam:"style=simple,explode=false,name=cardId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type DeleteStripeGatewayUserUserIDCardsCardIDRequest struct {
	PathParams DeleteStripeGatewayUserUserIDCardsCardIDPathParams
}

type DeleteStripeGatewayUserUserIDCardsCardIDResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
