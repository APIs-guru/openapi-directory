package operations

import (
	"openapi/pkg/models/shared"
)

type GetOfferingsInfoTextPatternPathParams struct {
	TextPattern string `pathParam:"style=simple,explode=false,name=textPattern"`
}

type GetOfferingsInfoTextPatternRequest struct {
	PathParams GetOfferingsInfoTextPatternPathParams
}

type GetOfferingsInfoTextPatternResponse struct {
	ContentType          string
	Error                *shared.Error
	PortfolioActivations []shared.PortfolioActivations
	StatusCode           int64
}
