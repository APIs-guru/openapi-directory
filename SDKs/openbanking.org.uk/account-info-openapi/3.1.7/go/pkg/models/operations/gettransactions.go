package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetTransactionsQueryParams struct {
	FromBookingDateTime *time.Time `queryParam:"style=form,explode=true,name=fromBookingDateTime"`
	ToBookingDateTime   *time.Time `queryParam:"style=form,explode=true,name=toBookingDateTime"`
}

type GetTransactionsHeaders struct {
	Authorization          string  `header:"style=simple,explode=false,name=Authorization"`
	XCustomerUserAgent     *string `header:"style=simple,explode=false,name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"style=simple,explode=false,name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"style=simple,explode=false,name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"style=simple,explode=false,name=x-fapi-interaction-id"`
}

type GetTransactionsSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetTransactionsRequest struct {
	QueryParams GetTransactionsQueryParams
	Headers     GetTransactionsHeaders
	Security    GetTransactionsSecurity
}

type GetTransactionsResponse struct {
	Body               []byte
	ContentType        string
	Headers            map[string][]string
	ObErrorResponse1   *shared.ObErrorResponse1
	ObReadTransaction6 *shared.ObReadTransaction6
	StatusCode         int64
}
