package shared

type QueuedResourceStateStateEnum string

const (
	QueuedResourceStateStateEnumStateUnspecified QueuedResourceStateStateEnum = "STATE_UNSPECIFIED"
	QueuedResourceStateStateEnumCreating         QueuedResourceStateStateEnum = "CREATING"
	QueuedResourceStateStateEnumAccepted         QueuedResourceStateStateEnum = "ACCEPTED"
	QueuedResourceStateStateEnumProvisioning     QueuedResourceStateStateEnum = "PROVISIONING"
	QueuedResourceStateStateEnumFailed           QueuedResourceStateStateEnum = "FAILED"
	QueuedResourceStateStateEnumDeleting         QueuedResourceStateStateEnum = "DELETING"
	QueuedResourceStateStateEnumActive           QueuedResourceStateStateEnum = "ACTIVE"
	QueuedResourceStateStateEnumSuspending       QueuedResourceStateStateEnum = "SUSPENDING"
	QueuedResourceStateStateEnumSuspended        QueuedResourceStateStateEnum = "SUSPENDED"
)

// QueuedResourceState
// QueuedResourceState defines the details of the QueuedResource request.
type QueuedResourceState struct {
	AcceptedData     map[string]interface{}        `json:"acceptedData,omitempty"`
	ActiveData       map[string]interface{}        `json:"activeData,omitempty"`
	CreatingData     map[string]interface{}        `json:"creatingData,omitempty"`
	DeletingData     map[string]interface{}        `json:"deletingData,omitempty"`
	FailedData       *FailedData                   `json:"failedData,omitempty"`
	ProvisioningData map[string]interface{}        `json:"provisioningData,omitempty"`
	State            *QueuedResourceStateStateEnum `json:"state,omitempty"`
	SuspendedData    map[string]interface{}        `json:"suspendedData,omitempty"`
	SuspendingData   map[string]interface{}        `json:"suspendingData,omitempty"`
}
