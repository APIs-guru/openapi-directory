package operations

import (
	"openapi/pkg/models/shared"
)

type GetReportPerformanceSkuRationalizationPlanningLevelIDPathParams struct {
	PlanningLevelID int32 `pathParam:"style=simple,explode=false,name=planningLevelId"`
}

type GetReportPerformanceSkuRationalizationPlanningLevelIDHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type GetReportPerformanceSkuRationalizationPlanningLevelIDRequest struct {
	PathParams GetReportPerformanceSkuRationalizationPlanningLevelIDPathParams
	Headers    GetReportPerformanceSkuRationalizationPlanningLevelIDHeaders
}

type GetReportPerformanceSkuRationalizationPlanningLevelIDResponse struct {
	Body            []byte
	ContentType     string
	PortfolioModels []shared.PortfolioModel
	StatusCode      int64
}
