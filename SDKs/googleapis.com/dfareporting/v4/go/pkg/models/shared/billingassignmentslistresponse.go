package shared

type BillingAssignmentsListResponse struct {
	BillingAssignments []BillingAssignment `json:"billingAssignments"`
	Kind               *string             `json:"kind"`
}
