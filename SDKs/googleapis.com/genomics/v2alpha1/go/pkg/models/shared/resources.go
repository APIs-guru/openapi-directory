package shared



type Resources struct {
    ProjectID *string `json:"projectId,omitempty"`
    Regions []string `json:"regions,omitempty"`
    VirtualMachine *VirtualMachine `json:"virtualMachine,omitempty"`
    Zones []string `json:"zones,omitempty"`
    
}

