package shared

// DomainMapping
// Resource to hold the state and status of a user's domain mapping. NOTE: This resource is currently in Beta.
type DomainMapping struct {
	APIVersion *string              `json:"apiVersion,omitempty"`
	Kind       *string              `json:"kind,omitempty"`
	Metadata   *ObjectMeta          `json:"metadata,omitempty"`
	Spec       *DomainMappingSpec   `json:"spec,omitempty"`
	Status     *DomainMappingStatus `json:"status,omitempty"`
}
