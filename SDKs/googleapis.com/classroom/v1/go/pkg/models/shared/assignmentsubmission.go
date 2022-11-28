package shared

// AssignmentSubmission
// Student work for an assignment.
type AssignmentSubmission struct {
	Attachments []Attachment `json:"attachments,omitempty"`
}
