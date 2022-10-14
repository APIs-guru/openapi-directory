package shared

type ActivityAttemptOpenResponseFeedback struct {
	FacilitatorEmail *string `json:"facilitatorEmail,omitempty"`
	Text             *string `json:"text,omitempty"`
}
