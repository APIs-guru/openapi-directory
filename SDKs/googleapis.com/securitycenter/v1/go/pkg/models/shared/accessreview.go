package shared

// AccessReview
// Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.
type AccessReview struct {
	Group       *string `json:"group,omitempty"`
	Name        *string `json:"name,omitempty"`
	Ns          *string `json:"ns,omitempty"`
	Resource    *string `json:"resource,omitempty"`
	Subresource *string `json:"subresource,omitempty"`
	Verb        *string `json:"verb,omitempty"`
	Version     *string `json:"version,omitempty"`
}
