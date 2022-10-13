package shared

type OperationManagedZoneContext struct {
	NewValue *ManagedZone `json:"newValue"`
	OldValue *ManagedZone `json:"oldValue"`
}
