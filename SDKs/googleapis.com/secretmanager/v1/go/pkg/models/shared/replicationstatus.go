package shared

type ReplicationStatus struct {
	Automatic   *AutomaticStatus   `json:"automatic"`
	UserManaged *UserManagedStatus `json:"userManaged"`
}
