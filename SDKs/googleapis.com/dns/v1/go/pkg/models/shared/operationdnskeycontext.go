package shared

type OperationDNSKeyContext struct {
	NewValue *DNSKey `json:"newValue"`
	OldValue *DNSKey `json:"oldValue"`
}
