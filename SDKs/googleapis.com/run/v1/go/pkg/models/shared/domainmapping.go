package shared

type DomainMapping struct {
	APIVersion *string              `json:"apiVersion"`
	Kind       *string              `json:"kind"`
	Metadata   *ObjectMeta          `json:"metadata"`
	Spec       *DomainMappingSpec   `json:"spec"`
	Status     *DomainMappingStatus `json:"status"`
}
