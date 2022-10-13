package shared

type OperationStatusEnum string

const (
	OperationStatusEnumPending OperationStatusEnum = "PENDING"
	OperationStatusEnumDone    OperationStatusEnum = "DONE"
)

type Operation struct {
	DNSKeyContext *OperationDNSKeyContext      `json:"dnsKeyContext"`
	ID            *string                      `json:"id"`
	Kind          *string                      `json:"kind"`
	StartTime     *string                      `json:"startTime"`
	Status        *OperationStatusEnum         `json:"status"`
	Type          *string                      `json:"type"`
	User          *string                      `json:"user"`
	ZoneContext   *OperationManagedZoneContext `json:"zoneContext"`
}
