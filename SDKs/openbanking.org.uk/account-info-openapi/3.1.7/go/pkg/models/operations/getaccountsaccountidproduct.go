package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDProductPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
}

type GetAccountsAccountIDProductHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDProductSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDProductRequest struct {
	PathParams GetAccountsAccountIDProductPathParams
	Headers    GetAccountsAccountIDProductHeaders
	Security   GetAccountsAccountIDProductSecurity
}

type GetAccountsAccountIDProductResponse struct {
	Body             []byte
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadProduct2   *shared.ObReadProduct2
	StatusCode       int64
}
