package shared

type BillingAssignmentsListResponse struct {
	BillingAssignments []BillingAssignment `json:"billingAssignments,omitempty"`
	Kind               *string             `json:"kind,omitempty"`
}
