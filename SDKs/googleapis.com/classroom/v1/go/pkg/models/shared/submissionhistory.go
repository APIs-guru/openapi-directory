package shared

// SubmissionHistory
// The history of the submission. This currently includes state and grade histories.
type SubmissionHistory struct {
	GradeHistory *GradeHistory `json:"gradeHistory,omitempty"`
	StateHistory *StateHistory `json:"stateHistory,omitempty"`
}
