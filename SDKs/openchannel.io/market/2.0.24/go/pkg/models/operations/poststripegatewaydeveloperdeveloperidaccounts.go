package operations



type PostStripeGatewayDeveloperDeveloperIDAccountsPathParams struct {
    DeveloperID string `pathParam:"style=simple,explode=false,name=developerId"`
    
}

type PostStripeGatewayDeveloperDeveloperIDAccountsQueryParams struct {
    RedirectURL string `queryParam:"style=form,explode=true,name=redirectUrl"`
    
}

type PostStripeGatewayDeveloperDeveloperIDAccountsRequest struct {
    PathParams PostStripeGatewayDeveloperDeveloperIDAccountsPathParams 
    QueryParams PostStripeGatewayDeveloperDeveloperIDAccountsQueryParams 
    
}

type PostStripeGatewayDeveloperDeveloperIDAccountsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

