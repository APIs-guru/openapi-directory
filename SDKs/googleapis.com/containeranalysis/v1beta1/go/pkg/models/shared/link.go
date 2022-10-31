package shared

type Link struct {
	Byproducts  *ByProducts                    `json:"byproducts,omitempty"`
	Command     []string                       `json:"command,omitempty"`
	Environment *Environment                   `json:"environment,omitempty"`
	Materials   []GrafeasV1beta1IntotoArtifact `json:"materials,omitempty"`
	Products    []GrafeasV1beta1IntotoArtifact `json:"products,omitempty"`
}
