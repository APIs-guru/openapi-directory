package shared

type RevisionTemplate struct {
	Metadata *ObjectMeta   `json:"metadata"`
	Spec     *RevisionSpec `json:"spec"`
}
