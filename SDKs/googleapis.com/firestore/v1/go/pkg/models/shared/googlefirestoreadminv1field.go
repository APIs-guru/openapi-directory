package shared

type GoogleFirestoreAdminV1Field struct {
	IndexConfig *GoogleFirestoreAdminV1IndexConfig `json:"indexConfig"`
	Name        *string                            `json:"name"`
	TTLConfig   *GoogleFirestoreAdminV1TTLConfig   `json:"ttlConfig"`
}
