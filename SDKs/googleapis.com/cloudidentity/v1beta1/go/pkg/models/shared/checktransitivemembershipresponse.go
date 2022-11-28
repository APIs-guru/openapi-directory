package shared

// CheckTransitiveMembershipResponse
// The response message for MembershipsService.CheckTransitiveMembership.
type CheckTransitiveMembershipResponse struct {
	HasMembership *bool `json:"hasMembership,omitempty"`
}
