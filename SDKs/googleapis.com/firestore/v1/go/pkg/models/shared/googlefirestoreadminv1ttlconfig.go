package shared

type GoogleFirestoreAdminV1TTLConfigStateEnum string

const (
	GoogleFirestoreAdminV1TTLConfigStateEnumStateUnspecified GoogleFirestoreAdminV1TTLConfigStateEnum = "STATE_UNSPECIFIED"
	GoogleFirestoreAdminV1TTLConfigStateEnumCreating         GoogleFirestoreAdminV1TTLConfigStateEnum = "CREATING"
	GoogleFirestoreAdminV1TTLConfigStateEnumActive           GoogleFirestoreAdminV1TTLConfigStateEnum = "ACTIVE"
	GoogleFirestoreAdminV1TTLConfigStateEnumNeedsRepair      GoogleFirestoreAdminV1TTLConfigStateEnum = "NEEDS_REPAIR"
)

type GoogleFirestoreAdminV1TTLConfig struct {
	State *GoogleFirestoreAdminV1TTLConfigStateEnum `json:"state,omitempty"`
}
