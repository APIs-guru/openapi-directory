package operations

type GetStripeGatewayDeveloperDeveloperIDAccountsPathParams struct {
	DeveloperID string `pathParam:"style=simple,explode=false,name=developerId"`
}

type GetStripeGatewayDeveloperDeveloperIDAccountsRequest struct {
	PathParams GetStripeGatewayDeveloperDeveloperIDAccountsPathParams
}

type GetStripeGatewayDeveloperDeveloperIDAccountsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
