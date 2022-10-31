package shared



type VirtualMachineIPAddress struct {
    Address string `json:"address"`
    Family *int64 `json:"family,omitempty"`
    ID *int64 `json:"id,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

