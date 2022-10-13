package shared

type SupportTicketRequest struct {
	Description      string  `json:"description"`
	DomainID         *int64  `json:"domain_id"`
	LinodeID         *int64  `json:"linode_id"`
	LongviewclientID *int64  `json:"longviewclient_id"`
	ManagedIssue     *bool   `json:"managed_issue"`
	NodebalancerID   *int64  `json:"nodebalancer_id"`
	Region           *string `json:"region"`
	Summary          string  `json:"summary"`
	Vlan             *string `json:"vlan"`
	VolumeID         *int64  `json:"volume_id"`
}
