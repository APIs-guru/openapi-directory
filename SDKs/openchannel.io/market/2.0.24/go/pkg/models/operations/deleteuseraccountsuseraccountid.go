package operations

type DeleteUserAccountsUserAccountIDPathParams struct {
	UserAccountID string `pathParam:"style=simple,explode=false,name=userAccountId"`
}

type DeleteUserAccountsUserAccountIDRequest struct {
	PathParams DeleteUserAccountsUserAccountIDPathParams
}

type DeleteUserAccountsUserAccountIDResponse struct {
	ContentType string
	StatusCode  int64
}
