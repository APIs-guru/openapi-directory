package shared



type ReplicationStatus struct {
    Automatic *AutomaticStatus `json:"automatic,omitempty"`
    UserManaged *UserManagedStatus `json:"userManaged,omitempty"`
    
}

