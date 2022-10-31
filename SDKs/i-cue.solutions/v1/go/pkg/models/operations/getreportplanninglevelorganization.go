package operations

type GetReportPlanningLevelOrganizationHeaders struct {
	Token *string `header:"style=simple,explode=false,name=Token"`
}

type GetReportPlanningLevelOrganizationRequest struct {
	Headers GetReportPlanningLevelOrganizationHeaders
}

type GetReportPlanningLevelOrganizationResponse struct {
	ContentType string
	StatusCode  int64
}
