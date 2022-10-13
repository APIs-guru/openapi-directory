package shared

type MoveOrgMembershipRequest struct {
	Customer           *string `json:"customer"`
	DestinationOrgUnit *string `json:"destinationOrgUnit"`
}
