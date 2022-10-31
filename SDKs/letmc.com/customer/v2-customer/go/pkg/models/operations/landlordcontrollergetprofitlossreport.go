package operations

import (
	"openapi/pkg/models/shared"
)

type LandlordControllerGetProfitLossReportPathParams struct {
	ShortName string `pathParam:"style=simple,explode=false,name=shortName"`
}

type LandlordControllerGetProfitLossReportQueryParams struct {
	Token string `queryParam:"style=form,explode=true,name=token"`
}

type LandlordControllerGetProfitLossReportRequest struct {
	PathParams  LandlordControllerGetProfitLossReportPathParams
	QueryParams LandlordControllerGetProfitLossReportQueryParams
}

type LandlordControllerGetProfitLossReportResponse struct {
	ContentType             string
	LandlordProfitLossModel *shared.LandlordProfitLossModel
	StatusCode              int64
}
