package shared

type Link struct {
	Byproducts  *ByProducts                    `json:"byproducts"`
	Command     []string                       `json:"command"`
	Environment *Environment                   `json:"environment"`
	Materials   []GrafeasV1beta1IntotoArtifact `json:"materials"`
	Products    []GrafeasV1beta1IntotoArtifact `json:"products"`
}
