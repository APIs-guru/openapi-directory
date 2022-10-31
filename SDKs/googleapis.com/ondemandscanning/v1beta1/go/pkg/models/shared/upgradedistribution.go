package shared



type UpgradeDistribution struct {
    Classification *string `json:"classification,omitempty"`
    CpeURI *string `json:"cpeUri,omitempty"`
    Cve []string `json:"cve,omitempty"`
    Severity *string `json:"severity,omitempty"`
    
}

