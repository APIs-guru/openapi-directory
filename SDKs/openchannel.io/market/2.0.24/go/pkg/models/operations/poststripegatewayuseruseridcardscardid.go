package operations



type PostStripeGatewayUserUserIDCardsCardIDPathParams struct {
    CardID string `pathParam:"style=simple,explode=false,name=cardId"`
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type PostStripeGatewayUserUserIDCardsCardIDQueryParams struct {
    AddressCity *string `queryParam:"style=form,explode=true,name=address_city"`
    AddressCountry *string `queryParam:"style=form,explode=true,name=address_country"`
    AddressLine1 *string `queryParam:"style=form,explode=true,name=address_line1"`
    AddressLine2 *string `queryParam:"style=form,explode=true,name=address_line2"`
    AddressState *string `queryParam:"style=form,explode=true,name=address_state"`
    AddressZip *string `queryParam:"style=form,explode=true,name=address_zip"`
    IsDefault *bool `queryParam:"style=form,explode=true,name=isDefault"`
    
}

type PostStripeGatewayUserUserIDCardsCardIDRequest struct {
    PathParams PostStripeGatewayUserUserIDCardsCardIDPathParams 
    QueryParams PostStripeGatewayUserUserIDCardsCardIDQueryParams 
    
}

type PostStripeGatewayUserUserIDCardsCardIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

