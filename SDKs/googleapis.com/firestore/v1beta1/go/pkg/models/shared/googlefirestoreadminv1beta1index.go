package shared

type GoogleFirestoreAdminV1beta1IndexStateEnum string

const (
	GoogleFirestoreAdminV1beta1IndexStateEnumStateUnspecified GoogleFirestoreAdminV1beta1IndexStateEnum = "STATE_UNSPECIFIED"
	GoogleFirestoreAdminV1beta1IndexStateEnumCreating         GoogleFirestoreAdminV1beta1IndexStateEnum = "CREATING"
	GoogleFirestoreAdminV1beta1IndexStateEnumReady            GoogleFirestoreAdminV1beta1IndexStateEnum = "READY"
	GoogleFirestoreAdminV1beta1IndexStateEnumError            GoogleFirestoreAdminV1beta1IndexStateEnum = "ERROR"
)

// GoogleFirestoreAdminV1beta1Index
// An index definition.
type GoogleFirestoreAdminV1beta1Index struct {
	CollectionID *string                                    `json:"collectionId,omitempty"`
	Fields       []GoogleFirestoreAdminV1beta1IndexField    `json:"fields,omitempty"`
	Name         *string                                    `json:"name,omitempty"`
	State        *GoogleFirestoreAdminV1beta1IndexStateEnum `json:"state,omitempty"`
}
