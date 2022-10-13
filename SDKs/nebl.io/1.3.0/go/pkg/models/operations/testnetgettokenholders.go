package operations

import (
	"openapi/pkg/models/shared"
)

type TestnetGetTokenHoldersPathParams struct {
	Tokenid string `pathParam:"style=simple,explode=false,name=tokenid"`
}

type TestnetGetTokenHoldersRequest struct {
	PathParams TestnetGetTokenHoldersPathParams
}

type TestnetGetTokenHoldersResponse struct {
	ContentType             string
	Error                   *shared.Error
	StatusCode              int64
	GetTokenHoldersResponse *shared.GetTokenHoldersResponse
}
