package shared

type DomainMapping struct {
	APIVersion *string              `json:"apiVersion,omitempty"`
	Kind       *string              `json:"kind,omitempty"`
	Metadata   *ObjectMeta          `json:"metadata,omitempty"`
	Spec       *DomainMappingSpec   `json:"spec,omitempty"`
	Status     *DomainMappingStatus `json:"status,omitempty"`
}
