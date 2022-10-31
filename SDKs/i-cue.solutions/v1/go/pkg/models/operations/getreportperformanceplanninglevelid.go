package operations

type GetReportPerformancePlanningLevelIDPathParams struct {
	PlanningLevelID string `pathParam:"style=simple,explode=false,name=planningLevelId"`
}

type GetReportPerformancePlanningLevelIDHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type GetReportPerformancePlanningLevelIDRequest struct {
	PathParams GetReportPerformancePlanningLevelIDPathParams
	Headers    GetReportPerformancePlanningLevelIDHeaders
}

type GetReportPerformancePlanningLevelIDResponse struct {
	ContentType string
	StatusCode  int64
}
