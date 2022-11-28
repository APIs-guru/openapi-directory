package shared

// ModifyIndividualStudentsOptions
// Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
type ModifyIndividualStudentsOptions struct {
	AddStudentIds    []string `json:"addStudentIds,omitempty"`
	RemoveStudentIds []string `json:"removeStudentIds,omitempty"`
}
