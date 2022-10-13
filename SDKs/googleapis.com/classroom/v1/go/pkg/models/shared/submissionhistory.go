package shared

type SubmissionHistory struct {
	GradeHistory *GradeHistory `json:"gradeHistory"`
	StateHistory *StateHistory `json:"stateHistory"`
}
