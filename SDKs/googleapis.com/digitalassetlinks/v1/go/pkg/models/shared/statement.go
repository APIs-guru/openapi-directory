package shared

// Statement
// Describes a reliable statement that has been made about the relationship between a source asset and a target asset. Statements are always made by the source asset, either directly or by delegating to a statement list that is stored elsewhere. For more detailed definitions of statements and assets, please refer to our [API documentation landing page](/digital-asset-links/v1/getting-started).
type Statement struct {
	Relation *string `json:"relation,omitempty"`
	Source   *Asset  `json:"source,omitempty"`
	Target   *Asset  `json:"target,omitempty"`
}
