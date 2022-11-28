package shared

// ValidateCreateMembershipResponse
// Response message for the `GkeHub.ValidateCreateMembership` method.
type ValidateCreateMembershipResponse struct {
	ValidationResults []ValidationResult `json:"validationResults,omitempty"`
}
