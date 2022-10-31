package shared



type ChangeReport struct {
    ConfigChanges []ConfigChange `json:"configChanges,omitempty"`
    
}

