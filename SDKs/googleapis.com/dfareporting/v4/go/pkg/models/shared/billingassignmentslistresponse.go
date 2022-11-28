package shared

// BillingAssignmentsListResponse
// Billing assignment List Response
type BillingAssignmentsListResponse struct {
	BillingAssignments []BillingAssignment `json:"billingAssignments,omitempty"`
	Kind               *string             `json:"kind,omitempty"`
}
