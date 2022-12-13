package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllBankAccountsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type GetAllBankAccountsRequest struct {
	PathParams GetAllBankAccountsPathParams
}

type GetAllBankAccountsResponse struct {
	BankAccountPaginatedResult *shared.BankAccountPaginatedResult
	ContentType                string
	StatusCode                 int64
}
