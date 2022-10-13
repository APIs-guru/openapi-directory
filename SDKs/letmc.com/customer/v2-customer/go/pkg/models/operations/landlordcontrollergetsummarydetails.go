package operations

import (
	"openapi/pkg/models/shared"
)

type LandlordControllerGetSummaryDetailsPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type LandlordControllerGetSummaryDetailsQueryParams struct {
	Token string `queryParam:"style=form,explode=true,name=token"`
}

type LandlordControllerGetSummaryDetailsRequest struct {
	PathParams  LandlordControllerGetSummaryDetailsPathParams
	QueryParams LandlordControllerGetSummaryDetailsQueryParams
}

type LandlordControllerGetSummaryDetailsResponse struct {
	ContentType          string
	LandlordSummaryModel *shared.LandlordSummaryModel
	StatusCode           int64
}
