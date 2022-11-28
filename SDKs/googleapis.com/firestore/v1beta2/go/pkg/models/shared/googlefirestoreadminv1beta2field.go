package shared

// GoogleFirestoreAdminV1beta2Field
// Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
type GoogleFirestoreAdminV1beta2Field struct {
	IndexConfig *GoogleFirestoreAdminV1beta2IndexConfig `json:"indexConfig,omitempty"`
	Name        *string                                 `json:"name,omitempty"`
}
