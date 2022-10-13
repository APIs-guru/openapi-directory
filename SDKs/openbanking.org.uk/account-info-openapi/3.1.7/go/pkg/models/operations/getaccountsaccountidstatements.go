package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetAccountsAccountIDStatementsPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=AccountId"`
}

type GetAccountsAccountIDStatementsQueryParams struct {
	FromStatementDateTime *time.Time `queryParam:"style=form,explode=true,name=fromStatementDateTime"`
	ToStatementDateTime   *time.Time `queryParam:"style=form,explode=true,name=toStatementDateTime"`
}

type GetAccountsAccountIDStatementsHeaders struct {
	Authorization          string  `header:"name=Authorization"`
	XCustomerUserAgent     *string `header:"name=x-customer-user-agent"`
	XFapiAuthDate          *string `header:"name=x-fapi-auth-date"`
	XFapiCustomerIPAddress *string `header:"name=x-fapi-customer-ip-address"`
	XFapiInteractionID     *string `header:"name=x-fapi-interaction-id"`
}

type GetAccountsAccountIDStatementsSecurity struct {
	PsuoAuth2Security shared.SchemePsuoAuth2Security `security:"scheme,type=oauth2"`
}

type GetAccountsAccountIDStatementsRequest struct {
	PathParams  GetAccountsAccountIDStatementsPathParams
	QueryParams GetAccountsAccountIDStatementsQueryParams
	Headers     GetAccountsAccountIDStatementsHeaders
	Security    GetAccountsAccountIDStatementsSecurity
}

type GetAccountsAccountIDStatementsResponse struct {
	Body             []byte
	ContentType      string
	Headers          map[string][]string
	ObErrorResponse1 *shared.ObErrorResponse1
	ObReadStatement2 *shared.ObReadStatement2
	StatusCode       int64
}
