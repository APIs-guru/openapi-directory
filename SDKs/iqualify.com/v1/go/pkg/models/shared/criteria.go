package shared



type Criteria struct {
    HasCompletedCourse *bool `json:"hasCompletedCourse,omitempty"`
    HasPassedMandatoryAssessedQuizzes *bool `json:"hasPassedMandatoryAssessedQuizzes,omitempty"`
    
}

