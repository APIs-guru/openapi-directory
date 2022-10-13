package shared

type Replication struct {
	Automatic   *Automatic   `json:"automatic"`
	UserManaged *UserManaged `json:"userManaged"`
}
