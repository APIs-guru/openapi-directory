package operations

import (
	"openapi/pkg/models/shared"
)

type GetSpotSetsByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSpotSetsByIDRequest struct {
	PathParams GetSpotSetsByIDPathParams
}

type GetSpotSetsByIDResponse struct {
	ContentType string
	SpotSet     *shared.SpotSet
	StatusCode  int64
}
