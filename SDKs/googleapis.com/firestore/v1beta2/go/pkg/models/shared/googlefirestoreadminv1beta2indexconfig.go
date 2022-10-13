package shared

type GoogleFirestoreAdminV1beta2IndexConfig struct {
	AncestorField      *string                            `json:"ancestorField"`
	Indexes            []GoogleFirestoreAdminV1beta2Index `json:"indexes"`
	Reverting          *bool                              `json:"reverting"`
	UsesAncestorConfig *bool                              `json:"usesAncestorConfig"`
}
