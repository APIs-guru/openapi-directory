package operations

type DeleteBankAccountPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
	BankAccountID string `pathParam:"style=simple,explode=false,name=bank_account_id"`
	Version       string `pathParam:"style=simple,explode=false,name=version"`
}

type DeleteBankAccountRequest struct {
	PathParams DeleteBankAccountPathParams
}

type DeleteBankAccountResponse struct {
	ContentType string
	StatusCode  int64
}
