package shared

type Criteria struct {
	HasCompletedCourse                *bool `json:"hasCompletedCourse"`
	HasPassedMandatoryAssessedQuizzes *bool `json:"hasPassedMandatoryAssessedQuizzes"`
}
