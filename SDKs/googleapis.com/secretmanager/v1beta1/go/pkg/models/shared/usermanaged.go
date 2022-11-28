package shared

// UserManaged
// A replication policy that replicates the Secret payload into the locations specified in Secret.replication.user_managed.replicas
type UserManaged struct {
	Replicas []Replica `json:"replicas,omitempty"`
}
