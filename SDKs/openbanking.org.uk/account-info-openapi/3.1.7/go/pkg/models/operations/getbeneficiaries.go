package operations

import (
	"openapi/pkg/models/shared"
)

type GetBeneficiariesHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetBeneficiariesSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetBeneficiariesRequest struct {
	Headers  GetBeneficiariesHeaders
	Security GetBeneficiariesSecurity
}

type GetBeneficiariesResponse struct {
	Body               []byte
	ContentType        string
	Headers            map[string][]string
	ObErrorResponse1   *shared.ObErrorResponse1
	ObReadBeneficiary5 *shared.ObReadBeneficiary5
	StatusCode         int64
}
