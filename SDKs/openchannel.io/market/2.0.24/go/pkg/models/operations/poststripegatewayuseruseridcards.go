package operations



type PostStripeGatewayUserUserIDCardsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type PostStripeGatewayUserUserIDCardsQueryParams struct {
    IsDefault *bool `queryParam:"style=form,explode=true,name=isDefault"`
    Token string `queryParam:"style=form,explode=true,name=token"`
    
}

type PostStripeGatewayUserUserIDCardsRequest struct {
    PathParams PostStripeGatewayUserUserIDCardsPathParams 
    QueryParams PostStripeGatewayUserUserIDCardsQueryParams 
    
}

type PostStripeGatewayUserUserIDCardsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

