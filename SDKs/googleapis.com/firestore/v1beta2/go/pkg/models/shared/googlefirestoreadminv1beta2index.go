package shared

type GoogleFirestoreAdminV1beta2IndexQueryScopeEnum string

const (
	GoogleFirestoreAdminV1beta2IndexQueryScopeEnumQueryScopeUnspecified GoogleFirestoreAdminV1beta2IndexQueryScopeEnum = "QUERY_SCOPE_UNSPECIFIED"
	GoogleFirestoreAdminV1beta2IndexQueryScopeEnumCollection            GoogleFirestoreAdminV1beta2IndexQueryScopeEnum = "COLLECTION"
	GoogleFirestoreAdminV1beta2IndexQueryScopeEnumCollectionGroup       GoogleFirestoreAdminV1beta2IndexQueryScopeEnum = "COLLECTION_GROUP"
)

type GoogleFirestoreAdminV1beta2IndexStateEnum string

const (
	GoogleFirestoreAdminV1beta2IndexStateEnumStateUnspecified GoogleFirestoreAdminV1beta2IndexStateEnum = "STATE_UNSPECIFIED"
	GoogleFirestoreAdminV1beta2IndexStateEnumCreating         GoogleFirestoreAdminV1beta2IndexStateEnum = "CREATING"
	GoogleFirestoreAdminV1beta2IndexStateEnumReady            GoogleFirestoreAdminV1beta2IndexStateEnum = "READY"
	GoogleFirestoreAdminV1beta2IndexStateEnumNeedsRepair      GoogleFirestoreAdminV1beta2IndexStateEnum = "NEEDS_REPAIR"
)

type GoogleFirestoreAdminV1beta2Index struct {
	Fields     []GoogleFirestoreAdminV1beta2IndexField         `json:"fields,omitempty"`
	Name       *string                                         `json:"name,omitempty"`
	QueryScope *GoogleFirestoreAdminV1beta2IndexQueryScopeEnum `json:"queryScope,omitempty"`
	State      *GoogleFirestoreAdminV1beta2IndexStateEnum      `json:"state,omitempty"`
}
