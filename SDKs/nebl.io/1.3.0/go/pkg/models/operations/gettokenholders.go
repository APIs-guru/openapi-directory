package operations

import (
	"openapi/pkg/models/shared"
)

type GetTokenHoldersPathParams struct {
	Tokenid string `pathParam:"style=simple,explode=false,name=tokenid"`
}

type GetTokenHoldersRequest struct {
	PathParams GetTokenHoldersPathParams
}

type GetTokenHoldersResponse struct {
	ContentType             string
	Error                   *shared.Error
	StatusCode              int64
	GetTokenHoldersResponse *shared.GetTokenHoldersResponse
}
