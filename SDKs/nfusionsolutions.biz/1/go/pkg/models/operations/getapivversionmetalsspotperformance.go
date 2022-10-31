package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIVVersionMetalsSpotPerformancePathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetAPIVVersionMetalsSpotPerformanceQueryParams struct {
	Currency      *string                    `queryParam:"style=form,explode=true,name=currency"`
	Format        *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Metals        string                     `queryParam:"style=form,explode=true,name=metals"`
	Token         string                     `queryParam:"style=form,explode=true,name=token"`
	Unitofmeasure *shared.UnitOfMeasureEnum  `queryParam:"style=form,explode=true,name=unitofmeasure"`
}

type GetAPIVVersionMetalsSpotPerformanceRequest struct {
	PathParams  GetAPIVVersionMetalsSpotPerformancePathParams
	QueryParams GetAPIVVersionMetalsSpotPerformanceQueryParams
}

type GetAPIVVersionMetalsSpotPerformanceResponse struct {
	Body                        []byte
	ContentType                 string
	IntervalCollectionResponses []shared.IntervalCollectionResponse
	ProblemDetails              map[string]interface{}
	StatusCode                  int64
}
