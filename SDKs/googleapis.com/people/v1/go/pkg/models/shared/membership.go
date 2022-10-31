package shared



type Membership struct {
    ContactGroupMembership *ContactGroupMembership `json:"contactGroupMembership,omitempty"`
    DomainMembership *DomainMembership `json:"domainMembership,omitempty"`
    Metadata *FieldMetadata `json:"metadata,omitempty"`
    
}

