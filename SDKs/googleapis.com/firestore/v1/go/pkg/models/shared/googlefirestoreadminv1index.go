package shared

type GoogleFirestoreAdminV1IndexAPIScopeEnum string

const (
	GoogleFirestoreAdminV1IndexAPIScopeEnumAnyAPI           GoogleFirestoreAdminV1IndexAPIScopeEnum = "ANY_API"
	GoogleFirestoreAdminV1IndexAPIScopeEnumDatastoreModeAPI GoogleFirestoreAdminV1IndexAPIScopeEnum = "DATASTORE_MODE_API"
)

type GoogleFirestoreAdminV1IndexQueryScopeEnum string

const (
	GoogleFirestoreAdminV1IndexQueryScopeEnumQueryScopeUnspecified GoogleFirestoreAdminV1IndexQueryScopeEnum = "QUERY_SCOPE_UNSPECIFIED"
	GoogleFirestoreAdminV1IndexQueryScopeEnumCollection            GoogleFirestoreAdminV1IndexQueryScopeEnum = "COLLECTION"
	GoogleFirestoreAdminV1IndexQueryScopeEnumCollectionGroup       GoogleFirestoreAdminV1IndexQueryScopeEnum = "COLLECTION_GROUP"
	GoogleFirestoreAdminV1IndexQueryScopeEnumCollectionRecursive   GoogleFirestoreAdminV1IndexQueryScopeEnum = "COLLECTION_RECURSIVE"
)

type GoogleFirestoreAdminV1IndexStateEnum string

const (
	GoogleFirestoreAdminV1IndexStateEnumStateUnspecified GoogleFirestoreAdminV1IndexStateEnum = "STATE_UNSPECIFIED"
	GoogleFirestoreAdminV1IndexStateEnumCreating         GoogleFirestoreAdminV1IndexStateEnum = "CREATING"
	GoogleFirestoreAdminV1IndexStateEnumReady            GoogleFirestoreAdminV1IndexStateEnum = "READY"
	GoogleFirestoreAdminV1IndexStateEnumNeedsRepair      GoogleFirestoreAdminV1IndexStateEnum = "NEEDS_REPAIR"
)

// GoogleFirestoreAdminV1Index
// Cloud Firestore indexes enable simple and complex queries against documents in a database.
type GoogleFirestoreAdminV1Index struct {
	APIScope   *GoogleFirestoreAdminV1IndexAPIScopeEnum   `json:"apiScope,omitempty"`
	Fields     []GoogleFirestoreAdminV1IndexField         `json:"fields,omitempty"`
	Name       *string                                    `json:"name,omitempty"`
	QueryScope *GoogleFirestoreAdminV1IndexQueryScopeEnum `json:"queryScope,omitempty"`
	State      *GoogleFirestoreAdminV1IndexStateEnum      `json:"state,omitempty"`
}
