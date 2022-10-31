package shared



type MoveOrgMembershipRequest struct {
    Customer *string `json:"customer,omitempty"`
    DestinationOrgUnit *string `json:"destinationOrgUnit,omitempty"`
    
}

