package shared



type Replication struct {
    Automatic *Automatic `json:"automatic,omitempty"`
    UserManaged *UserManaged `json:"userManaged,omitempty"`
    
}

