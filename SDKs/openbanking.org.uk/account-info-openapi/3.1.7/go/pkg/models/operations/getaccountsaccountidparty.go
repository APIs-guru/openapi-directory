package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDPartyPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
}

type GetAccountsAccountIDPartyHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDPartySecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDPartyRequest struct {
	PathParams GetAccountsAccountIDPartyPathParams
	Headers    GetAccountsAccountIDPartyHeaders
	Security   GetAccountsAccountIDPartySecurity
}

type GetAccountsAccountIDPartyResponse struct {
	Body             []byte
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadParty2     *shared.ObReadParty2
	StatusCode       int64
}
