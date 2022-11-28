package shared

type OperationStatusEnum string

const (
	OperationStatusEnumPending OperationStatusEnum = "pending"
	OperationStatusEnumDone    OperationStatusEnum = "done"
)

// Operation
// An operation represents a successful mutation performed on a Cloud DNS resource. Operations provide: - An audit log of server resource mutations. - A way to recover/retry API calls in the case where the response is never received by the caller. Use the caller specified client_operation_id.
type Operation struct {
	DNSKeyContext *OperationDNSKeyContext      `json:"dnsKeyContext,omitempty"`
	ID            *string                      `json:"id,omitempty"`
	Kind          *string                      `json:"kind,omitempty"`
	StartTime     *string                      `json:"startTime,omitempty"`
	Status        *OperationStatusEnum         `json:"status,omitempty"`
	Type          *string                      `json:"type,omitempty"`
	User          *string                      `json:"user,omitempty"`
	ZoneContext   *OperationManagedZoneContext `json:"zoneContext,omitempty"`
}
