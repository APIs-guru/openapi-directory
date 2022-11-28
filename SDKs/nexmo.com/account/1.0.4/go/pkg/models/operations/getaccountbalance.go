package operations

import (
	"openapi/pkg/models/shared"
)

var GetAccountBalanceServerList = []string{
	"https://rest.nexmo.com",
}

type GetAccountBalanceQueryParams struct {
	APIKey    string `queryParam:"style=form,explode=true,name=api_key"`
	APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
}

type GetAccountBalanceRequest struct {
	ServerURL   *string
	QueryParams GetAccountBalanceQueryParams
}

type GetAccountBalanceResponse struct {
	Body                                    []byte
	ContentType                             string
	ErrorAuthenticationFailedAccountBalance *shared.ErrorAuthenticationFailedAccountBalance
	StatusCode                              int64
	AccountBalance                          *shared.AccountBalance
}
