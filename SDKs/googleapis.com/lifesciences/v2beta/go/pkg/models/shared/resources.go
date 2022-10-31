package shared



type Resources struct {
    Regions []string `json:"regions,omitempty"`
    VirtualMachine *VirtualMachine `json:"virtualMachine,omitempty"`
    Zones []string `json:"zones,omitempty"`
    
}

