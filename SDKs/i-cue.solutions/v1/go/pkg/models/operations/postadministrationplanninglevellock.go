package operations

type PostAdministrationPlanningLevelLockHeaders struct {
	Token *string `header:"name=Token"`
}

type PostAdministrationPlanningLevelLockRequest struct {
	Headers PostAdministrationPlanningLevelLockHeaders
}

type PostAdministrationPlanningLevelLockResponse struct {
	ContentType string
	StatusCode  int64
}
