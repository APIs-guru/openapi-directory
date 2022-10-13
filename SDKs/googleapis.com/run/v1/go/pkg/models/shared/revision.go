package shared

type Revision struct {
	APIVersion *string         `json:"apiVersion"`
	Kind       *string         `json:"kind"`
	Metadata   *ObjectMeta     `json:"metadata"`
	Spec       *RevisionSpec   `json:"spec"`
	Status     *RevisionStatus `json:"status"`
}
