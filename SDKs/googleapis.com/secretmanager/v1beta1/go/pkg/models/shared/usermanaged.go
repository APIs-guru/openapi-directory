package shared

type UserManaged struct {
	Replicas []Replica `json:"replicas,omitempty"`
}
