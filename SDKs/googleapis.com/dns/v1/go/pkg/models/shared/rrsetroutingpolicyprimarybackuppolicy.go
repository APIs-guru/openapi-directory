package shared

// RrSetRoutingPolicyPrimaryBackupPolicy
// Configures a RRSetRoutingPolicy such that all queries are responded with the primary_targets if they are healthy. And if all of them are unhealthy, then we fallback to a geo localized policy.
type RrSetRoutingPolicyPrimaryBackupPolicy struct {
	BackupGeoTargets *RrSetRoutingPolicyGeoPolicy          `json:"backupGeoTargets,omitempty"`
	Kind             *string                               `json:"kind,omitempty"`
	PrimaryTargets   *RrSetRoutingPolicyHealthCheckTargets `json:"primaryTargets,omitempty"`
	TrickleTraffic   *float64                              `json:"trickleTraffic,omitempty"`
}
