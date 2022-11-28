package shared

// IndividualStudentsOptions
// Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
type IndividualStudentsOptions struct {
	StudentIds []string `json:"studentIds,omitempty"`
}
