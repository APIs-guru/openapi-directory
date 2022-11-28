package shared

// MoveOrgMembershipRequest
// The request message for OrgMembershipsService.MoveOrgMembership.
type MoveOrgMembershipRequest struct {
	Customer           *string `json:"customer,omitempty"`
	DestinationOrgUnit *string `json:"destinationOrgUnit,omitempty"`
}
