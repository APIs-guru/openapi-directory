package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDStandingOrdersPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountsAccountIDStandingOrdersHeaders struct {
	SandboxID              string  `header:"style=simple,explode=false,name=sandbox-id"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDStandingOrdersSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountsAccountIDStandingOrdersRequest struct {
	PathParams GetAccountsAccountIDStandingOrdersPathParams
	Headers    GetAccountsAccountIDStandingOrdersHeaders
	Security   GetAccountsAccountIDStandingOrdersSecurity
}

type GetAccountsAccountIDStandingOrdersResponse struct {
	ContentType          string
	Headers              map[string][]string
	ObErrorResponse1     *shared.ObErrorResponse1
	ObReadStandingOrder6 *shared.ObReadStandingOrder6
	StatusCode           int64
}
