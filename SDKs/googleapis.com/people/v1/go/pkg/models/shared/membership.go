package shared

type Membership struct {
	ContactGroupMembership *ContactGroupMembership `json:"contactGroupMembership"`
	DomainMembership       *DomainMembership       `json:"domainMembership"`
	Metadata               *FieldMetadata          `json:"metadata"`
}
