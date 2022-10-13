package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDBeneficiariesPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type GetAccountsAccountIDBeneficiariesHeaders struct {
	SandboxID              string  `header:"name=sandbox-id"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDBeneficiariesSecurity struct {
	AuthorizationCodeToken shared.SchemeAuthorizationCodeToken `security:"scheme,type=oauth2"`
	ClientID               shared.SchemeClientID               `security:"scheme,type=apiKey,subtype=header"`
}

type GetAccountsAccountIDBeneficiariesRequest struct {
	PathParams GetAccountsAccountIDBeneficiariesPathParams
	Headers    GetAccountsAccountIDBeneficiariesHeaders
	Security   GetAccountsAccountIDBeneficiariesSecurity
}

type GetAccountsAccountIDBeneficiariesResponse struct {
	ContentType        string
	Headers            map[string][]string
	ObErrorResponse1   *shared.ObErrorResponse1
	ObReadBeneficiary5 *shared.ObReadBeneficiary5
	StatusCode         int64
}
