package shared

// Replication
// A policy that defines the replication and encryption configuration of data.
type Replication struct {
	Automatic   *Automatic   `json:"automatic,omitempty"`
	UserManaged *UserManaged `json:"userManaged,omitempty"`
}
