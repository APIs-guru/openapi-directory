package shared



type RrSetRoutingPolicyPrimaryBackupPolicy struct {
    BackupGeoTargets *RrSetRoutingPolicyGeoPolicy `json:"backupGeoTargets,omitempty"`
    Kind *string `json:"kind,omitempty"`
    PrimaryTargets *RrSetRoutingPolicyHealthCheckTargets `json:"primaryTargets,omitempty"`
    TrickleTraffic *float64 `json:"trickleTraffic,omitempty"`
    
}

