package shared



type Tier struct {
    DiskQuota *string `json:"DiskQuota,omitempty"`
    RAM *string `json:"RAM,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Region []string `json:"region,omitempty"`
    Tier *string `json:"tier,omitempty"`
    
}

