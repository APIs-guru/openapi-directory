package shared



type ModifyIndividualStudentsOptions struct {
    AddStudentIds []string `json:"addStudentIds,omitempty"`
    RemoveStudentIds []string `json:"removeStudentIds,omitempty"`
    
}

