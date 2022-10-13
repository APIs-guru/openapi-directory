package operations

import (
	"openapi/pkg/models/shared"
)

type PostUpdatedSeriesQueryParams struct {
	TvdbID *string `queryParam:"style=form,explode=true,name=tvdbId"`
}

type PostUpdatedSeriesSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type PostUpdatedSeriesRequest struct {
	QueryParams PostUpdatedSeriesQueryParams
	Security    PostUpdatedSeriesSecurity
}

type PostUpdatedSeriesResponse struct {
	ContentType string
	StatusCode  int64
}
