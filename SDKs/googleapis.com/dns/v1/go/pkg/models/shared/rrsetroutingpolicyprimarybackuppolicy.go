package shared

type RrSetRoutingPolicyPrimaryBackupPolicy struct {
	BackupGeoTargets *RrSetRoutingPolicyGeoPolicy          `json:"backupGeoTargets"`
	Kind             *string                               `json:"kind"`
	PrimaryTargets   *RrSetRoutingPolicyHealthCheckTargets `json:"primaryTargets"`
	TrickleTraffic   *float64                              `json:"trickleTraffic"`
}
