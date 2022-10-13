package shared

type GoogleFirestoreAdminV1IndexConfig struct {
	AncestorField      *string                       `json:"ancestorField"`
	Indexes            []GoogleFirestoreAdminV1Index `json:"indexes"`
	Reverting          *bool                         `json:"reverting"`
	UsesAncestorConfig *bool                         `json:"usesAncestorConfig"`
}
