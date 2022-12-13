package operations

import (
	"openapi/pkg/models/shared"
)

type GetBankAccountPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	BankAccountID string `pathParam:"style=simple,explode=false,name=bank_account_id"`
}

type GetBankAccountRequest struct {
	PathParams GetBankAccountPathParams
}

type GetBankAccountResponse struct {
	BankAccountResult *shared.BankAccountResult
	ContentType       string
	StatusCode        int64
}
