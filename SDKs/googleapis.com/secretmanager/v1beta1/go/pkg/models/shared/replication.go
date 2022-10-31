package shared



type Replication struct {
    Automatic map[string]interface{} `json:"automatic,omitempty"`
    UserManaged *UserManaged `json:"userManaged,omitempty"`
    
}

