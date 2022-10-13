package operations

type GetReportPlanningLevelUserHeaders struct {
	Token *string `header:"name=Token"`
}

type GetReportPlanningLevelUserRequest struct {
	Headers GetReportPlanningLevelUserHeaders
}

type GetReportPlanningLevelUserResponse struct {
	ContentType string
	StatusCode  int64
}
