package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDPartyPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountsAccountIDPartyHeaders struct {
	SandboxID              string  `header:"name=sandbox-id"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDPartySecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountsAccountIDPartyRequest struct {
	PathParams GetAccountsAccountIDPartyPathParams
	Headers    GetAccountsAccountIDPartyHeaders
	Security   GetAccountsAccountIDPartySecurity
}

type GetAccountsAccountIDPartyResponse struct {
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadParty2     *shared.ObReadParty2
	StatusCode       int64
}
