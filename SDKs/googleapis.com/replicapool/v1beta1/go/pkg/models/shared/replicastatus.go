package shared

// ReplicaStatus
// The current status of a Replica.
type ReplicaStatus struct {
	Details         *string
	State           *string
	TemplateVersion *string
	VMLink          *string
	VMStartTime     *string
}
