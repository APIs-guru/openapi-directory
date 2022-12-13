package operations

import (
	"openapi/pkg/models/shared"
)

type CreateBankAccountPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type CreateBankAccountRequest struct {
	PathParams CreateBankAccountPathParams
	Request    shared.BankAccountCreateRequest `request:"mediaType=application/json"`
}

type CreateBankAccountResponse struct {
	BankAccountResult *shared.BankAccountResult
	ContentType       string
	StatusCode        int64
}
