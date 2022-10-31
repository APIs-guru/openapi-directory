package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIVVersionMetalsSpotRatioSummaryPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetAPIVVersionMetalsSpotRatioSummaryQueryParams struct {
	Format *shared.ResponseFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Pairs  string                     `queryParam:"style=form,explode=true,name=pairs"`
	Token  string                     `queryParam:"style=form,explode=true,name=token"`
}

type GetAPIVVersionMetalsSpotRatioSummaryRequest struct {
	PathParams  GetAPIVVersionMetalsSpotRatioSummaryPathParams
	QueryParams GetAPIVVersionMetalsSpotRatioSummaryQueryParams
}

type GetAPIVVersionMetalsSpotRatioSummaryResponse struct {
	Body             []byte
	ContentType      string
	ProblemDetails   map[string]interface{}
	StatusCode       int64
	SummaryResponses []shared.SummaryResponse
}
