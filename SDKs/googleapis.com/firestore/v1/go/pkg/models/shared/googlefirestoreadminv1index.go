package shared




type GoogleFirestoreAdminV1IndexQueryScopeEnum string

const (
    GoogleFirestoreAdminV1IndexQueryScopeEnumQueryScopeUnspecified GoogleFirestoreAdminV1IndexQueryScopeEnum = "QUERY_SCOPE_UNSPECIFIED"
GoogleFirestoreAdminV1IndexQueryScopeEnumCollection GoogleFirestoreAdminV1IndexQueryScopeEnum = "COLLECTION"
GoogleFirestoreAdminV1IndexQueryScopeEnumCollectionGroup GoogleFirestoreAdminV1IndexQueryScopeEnum = "COLLECTION_GROUP"
)



type GoogleFirestoreAdminV1IndexStateEnum string

const (
    GoogleFirestoreAdminV1IndexStateEnumStateUnspecified GoogleFirestoreAdminV1IndexStateEnum = "STATE_UNSPECIFIED"
GoogleFirestoreAdminV1IndexStateEnumCreating GoogleFirestoreAdminV1IndexStateEnum = "CREATING"
GoogleFirestoreAdminV1IndexStateEnumReady GoogleFirestoreAdminV1IndexStateEnum = "READY"
GoogleFirestoreAdminV1IndexStateEnumNeedsRepair GoogleFirestoreAdminV1IndexStateEnum = "NEEDS_REPAIR"
)


type GoogleFirestoreAdminV1Index struct {
    Fields []GoogleFirestoreAdminV1IndexField `json:"fields,omitempty"`
    Name *string `json:"name,omitempty"`
    QueryScope *GoogleFirestoreAdminV1IndexQueryScopeEnum `json:"queryScope,omitempty"`
    State *GoogleFirestoreAdminV1IndexStateEnum `json:"state,omitempty"`
    
}

