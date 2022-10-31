package operations

import (
	"openapi/pkg/models/shared"
)

var TopUpAccountBalanceServers = []string{
	"https://rest.nexmo.com",
}

type TopUpAccountBalanceQueryParams struct {
	APIKey    string `queryParam:"style=form,explode=true,name=api_key"`
	APISecret string `queryParam:"style=form,explode=true,name=api_secret"`
}

type TopUpAccountBalanceRequest struct {
	ServerURL   *string
	QueryParams TopUpAccountBalanceQueryParams
	Request     shared.TopupRequest `request:"mediaType=application/x-www-form-urlencoded"`
}

type TopUpAccountBalanceResponse struct {
	Body                                       []byte
	ContentType                                string
	StatusCode                                 int64
	Success                                    *shared.Success
	TopUpAccountBalance401ApplicationJSONOneOf *interface{}
}
