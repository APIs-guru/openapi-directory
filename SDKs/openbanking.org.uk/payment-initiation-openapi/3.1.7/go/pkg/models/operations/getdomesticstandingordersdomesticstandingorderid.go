package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomesticStandingOrdersDomesticStandingOrderIDPathParams struct {
	DomesticStandingOrderID string `pathParam:"style=simple,explode=false,name=DomesticStandingOrderId"`
}

type GetDomesticStandingOrdersDomesticStandingOrderIDHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetDomesticStandingOrdersDomesticStandingOrderIDSecurity struct {
	TppoAuth2Security shared.SchemeTppoAuth2Security `security:"scheme,type=oauth2"`
}

type GetDomesticStandingOrdersDomesticStandingOrderIDRequest struct {
	PathParams GetDomesticStandingOrdersDomesticStandingOrderIDPathParams
	Headers    GetDomesticStandingOrdersDomesticStandingOrderIDHeaders
	Security   GetDomesticStandingOrdersDomesticStandingOrderIDSecurity
}

type GetDomesticStandingOrdersDomesticStandingOrderIDResponse struct {
	Body                                  []byte
	ContentType                           string
	Headers                               map[string][]string
	ObErrorResponse1                      *shared.ObErrorResponse1
	ObWriteDomesticStandingOrderResponse6 *shared.ObWriteDomesticStandingOrderResponse6
	StatusCode                            int64
}
