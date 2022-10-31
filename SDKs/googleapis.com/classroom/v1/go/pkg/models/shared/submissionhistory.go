package shared



type SubmissionHistory struct {
    GradeHistory *GradeHistory `json:"gradeHistory,omitempty"`
    StateHistory *StateHistory `json:"stateHistory,omitempty"`
    
}

