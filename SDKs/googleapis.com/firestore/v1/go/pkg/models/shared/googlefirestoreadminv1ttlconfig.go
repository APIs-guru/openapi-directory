package shared

type GoogleFirestoreAdminV1TTLConfigStateEnum string

const (
	GoogleFirestoreAdminV1TTLConfigStateEnumStateUnspecified GoogleFirestoreAdminV1TTLConfigStateEnum = "STATE_UNSPECIFIED"
	GoogleFirestoreAdminV1TTLConfigStateEnumCreating         GoogleFirestoreAdminV1TTLConfigStateEnum = "CREATING"
	GoogleFirestoreAdminV1TTLConfigStateEnumActive           GoogleFirestoreAdminV1TTLConfigStateEnum = "ACTIVE"
	GoogleFirestoreAdminV1TTLConfigStateEnumNeedsRepair      GoogleFirestoreAdminV1TTLConfigStateEnum = "NEEDS_REPAIR"
)

// GoogleFirestoreAdminV1TTLConfig
// The TTL (time-to-live) configuration for documents that have this `Field` set. Storing a timestamp value into a TTL-enabled field will be treated as the document's absolute expiration time. Timestamp values in the past indicate that the document is eligible for immediate expiration. Using any other data type or leaving the field absent will disable expiration for the individual document.
type GoogleFirestoreAdminV1TTLConfig struct {
	State *GoogleFirestoreAdminV1TTLConfigStateEnum `json:"state,omitempty"`
}
