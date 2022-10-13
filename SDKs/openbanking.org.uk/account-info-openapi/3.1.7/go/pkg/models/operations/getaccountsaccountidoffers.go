package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDOffersPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
}

type GetAccountsAccountIDOffersHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDOffersSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDOffersRequest struct {
	PathParams GetAccountsAccountIDOffersPathParams
	Headers    GetAccountsAccountIDOffersHeaders
	Security   GetAccountsAccountIDOffersSecurity
}

type GetAccountsAccountIDOffersResponse struct {
	Body             []byte
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadOffer1     *shared.ObReadOffer1
	StatusCode       int64
}
