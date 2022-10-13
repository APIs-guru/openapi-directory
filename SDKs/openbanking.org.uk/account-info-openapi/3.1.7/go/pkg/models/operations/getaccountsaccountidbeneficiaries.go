package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountIDBeneficiariesPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
}

type GetAccountsAccountIDBeneficiariesHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDBeneficiariesSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDBeneficiariesRequest struct {
	PathParams GetAccountsAccountIDBeneficiariesPathParams
	Headers    GetAccountsAccountIDBeneficiariesHeaders
	Security   GetAccountsAccountIDBeneficiariesSecurity
}

type GetAccountsAccountIDBeneficiariesResponse struct {
	Body               []byte
	ContentType        string
	Headers            map[string][]string
	ObErrorResponse1   *shared.ObErrorResponse1
	ObReadBeneficiary5 *shared.ObReadBeneficiary5
	StatusCode         int64
}
