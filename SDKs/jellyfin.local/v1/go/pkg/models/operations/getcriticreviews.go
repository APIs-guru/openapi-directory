package operations

import (
	"openapi/pkg/models/shared"
)

type GetCriticReviewsPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetCriticReviewsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetCriticReviewsRequest struct {
	PathParams GetCriticReviewsPathParams
	Security   GetCriticReviewsSecurity
}

type GetCriticReviewsResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
