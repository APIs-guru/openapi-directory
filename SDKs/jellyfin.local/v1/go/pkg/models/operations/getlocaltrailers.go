package operations

import (
	"openapi/pkg/models/shared"
)

type GetLocalTrailersPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetLocalTrailersSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetLocalTrailersRequest struct {
	PathParams GetLocalTrailersPathParams
	Security   GetLocalTrailersSecurity
}

type GetLocalTrailersResponse struct {
	BaseItemDtos []shared.BaseItemDto
	ContentType  string
	StatusCode   int64
}
