package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDPartiesPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountsAccountIDPartiesHeaders struct {
	SandboxID              string  `header:"style=simple,explode=false,name=sandbox-id"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDPartiesSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountsAccountIDPartiesRequest struct {
	PathParams GetAccountsAccountIDPartiesPathParams
	Headers    GetAccountsAccountIDPartiesHeaders
	Security   GetAccountsAccountIDPartiesSecurity
}

type GetAccountsAccountIDPartiesResponse struct {
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadParty3     *shared.ObReadParty3
	StatusCode       int64
}
