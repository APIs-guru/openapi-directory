package shared

// ParameterTextV1
// Object containing text for the parameter that you can render on a front-end.
type ParameterTextV1 struct {
	AgentFacingText     *string `json:"agent_facing_text,omitempty"`
	ApplicantFacingText *string `json:"applicant_facing_text,omitempty"`
}
