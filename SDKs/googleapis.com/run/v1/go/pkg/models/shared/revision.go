package shared

type Revision struct {
	APIVersion *string         `json:"apiVersion,omitempty"`
	Kind       *string         `json:"kind,omitempty"`
	Metadata   *ObjectMeta     `json:"metadata,omitempty"`
	Spec       *RevisionSpec   `json:"spec,omitempty"`
	Status     *RevisionStatus `json:"status,omitempty"`
}
