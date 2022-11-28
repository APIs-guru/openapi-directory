package shared

// Revision
// Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#revision
type Revision struct {
	APIVersion *string         `json:"apiVersion,omitempty"`
	Kind       *string         `json:"kind,omitempty"`
	Metadata   *ObjectMeta     `json:"metadata,omitempty"`
	Spec       *RevisionSpec   `json:"spec,omitempty"`
	Status     *RevisionStatus `json:"status,omitempty"`
}
