package shared



type SupportTicketRequest struct {
    Description string `json:"description"`
    DomainID *int64 `json:"domain_id,omitempty"`
    LinodeID *int64 `json:"linode_id,omitempty"`
    LongviewclientID *int64 `json:"longviewclient_id,omitempty"`
    ManagedIssue *bool `json:"managed_issue,omitempty"`
    NodebalancerID *int64 `json:"nodebalancer_id,omitempty"`
    Region *string `json:"region,omitempty"`
    Summary string `json:"summary"`
    Vlan *string `json:"vlan,omitempty"`
    VolumeID *int64 `json:"volume_id,omitempty"`
    
}

