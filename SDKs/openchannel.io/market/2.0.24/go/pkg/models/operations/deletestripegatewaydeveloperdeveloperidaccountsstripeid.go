package operations



type DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDPathParams struct {
    DeveloperID string `pathParam:"style=simple,explode=false,name=developerId"`
    StripeID string `pathParam:"style=simple,explode=false,name=stripeId"`
    
}

type DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDRequest struct {
    PathParams DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDPathParams 
    
}

type DeleteStripeGatewayDeveloperDeveloperIDAccountsStripeIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

