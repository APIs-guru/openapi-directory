package shared

// RevisionTemplate
// RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
type RevisionTemplate struct {
	Metadata *ObjectMeta   `json:"metadata,omitempty"`
	Spec     *RevisionSpec `json:"spec,omitempty"`
}
