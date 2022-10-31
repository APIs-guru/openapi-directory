package shared



type UpgradeNote struct {
    Distributions []UpgradeDistribution `json:"distributions,omitempty"`
    Package *string `json:"package,omitempty"`
    Version *Version `json:"version,omitempty"`
    
}

