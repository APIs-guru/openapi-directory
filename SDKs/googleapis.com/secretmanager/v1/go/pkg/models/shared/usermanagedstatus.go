package shared

type UserManagedStatus struct {
	Replicas []ReplicaStatus `json:"replicas,omitempty"`
}
