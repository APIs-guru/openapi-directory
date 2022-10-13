package operations

import (
	"openapi/pkg/models/shared"
)

type QualityGetOverallDataQualityForSitesPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type QualityGetOverallDataQualityForSitesQueryParams struct {
	EndDate   string `queryParam:"style=form,explode=true,name=end_date"`
	Sites     string `queryParam:"style=form,explode=true,name=sites"`
	StartDate string `queryParam:"style=form,explode=true,name=start_date"`
}

type QualityGetOverallDataQualityForSitesRequest struct {
	PathParams  QualityGetOverallDataQualityForSitesPathParams
	QueryParams QualityGetOverallDataQualityForSitesQueryParams
}

type QualityGetOverallDataQualityForSitesResponse struct {
	ContentType            string
	OverallQualityResponse *shared.OverallQualityResponse
	StatusCode             int64
}
