package shared

// GoogleFirestoreAdminV1Field
// Represents a single field in the database. Fields are grouped by their "Collection Group", which represent all collections in the database with the same id.
type GoogleFirestoreAdminV1Field struct {
	IndexConfig *GoogleFirestoreAdminV1IndexConfig `json:"indexConfig,omitempty"`
	Name        *string                            `json:"name,omitempty"`
	TTLConfig   *GoogleFirestoreAdminV1TTLConfig   `json:"ttlConfig,omitempty"`
}
