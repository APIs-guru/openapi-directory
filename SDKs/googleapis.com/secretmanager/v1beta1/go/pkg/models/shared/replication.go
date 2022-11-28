package shared

// Replication
// A policy that defines the replication configuration of data.
type Replication struct {
	Automatic   map[string]interface{} `json:"automatic,omitempty"`
	UserManaged *UserManaged           `json:"userManaged,omitempty"`
}
