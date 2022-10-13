package operations

import (
	"openapi/pkg/models/shared"
)

type GetLocationRuleByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetLocationRuleByIDRequest struct {
	PathParams GetLocationRuleByIDPathParams
}

type GetLocationRuleByIDResponse struct {
	ContentType  string
	LocationRule *shared.LocationRule
	StatusCode   int64
}
