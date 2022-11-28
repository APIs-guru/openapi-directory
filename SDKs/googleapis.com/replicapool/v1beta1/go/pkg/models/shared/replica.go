package shared

// Replica
// An individual Replica within a Pool. Replicas are automatically created by the replica pool, using the template provided by the user. You cannot directly create replicas.
type Replica struct {
	Name     *string
	SelfLink *string
	Status   *ReplicaStatus
}
