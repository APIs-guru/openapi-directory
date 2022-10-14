package shared

type GoogleFirestoreAdminV1beta2IndexConfig struct {
	AncestorField      *string                            `json:"ancestorField,omitempty"`
	Indexes            []GoogleFirestoreAdminV1beta2Index `json:"indexes,omitempty"`
	Reverting          *bool                              `json:"reverting,omitempty"`
	UsesAncestorConfig *bool                              `json:"usesAncestorConfig,omitempty"`
}
