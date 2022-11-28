package shared

// GoogleFirestoreAdminV1IndexConfig
// The index configuration for this field.
type GoogleFirestoreAdminV1IndexConfig struct {
	AncestorField      *string                       `json:"ancestorField,omitempty"`
	Indexes            []GoogleFirestoreAdminV1Index `json:"indexes,omitempty"`
	Reverting          *bool                         `json:"reverting,omitempty"`
	UsesAncestorConfig *bool                         `json:"usesAncestorConfig,omitempty"`
}
