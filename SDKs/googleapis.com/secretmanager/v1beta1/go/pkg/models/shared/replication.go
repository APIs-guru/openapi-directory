package shared

type Replication struct {
	Automatic   map[string]interface{} `json:"automatic"`
	UserManaged *UserManaged           `json:"userManaged"`
}
