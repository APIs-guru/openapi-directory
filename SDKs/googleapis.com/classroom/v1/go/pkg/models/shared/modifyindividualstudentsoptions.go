package shared

type ModifyIndividualStudentsOptions struct {
	AddStudentIds    []string `json:"addStudentIds"`
	RemoveStudentIds []string `json:"removeStudentIds"`
}
