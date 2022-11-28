package shared

type PatchRolloutModeEnum string

const (
	PatchRolloutModeEnumModeUnspecified PatchRolloutModeEnum = "MODE_UNSPECIFIED"
	PatchRolloutModeEnumZoneByZone      PatchRolloutModeEnum = "ZONE_BY_ZONE"
	PatchRolloutModeEnumConcurrentZones PatchRolloutModeEnum = "CONCURRENT_ZONES"
)

// PatchRollout
// Patch rollout configuration specifications. Contains details on the concurrency control when applying patch(es) to all targeted VMs.
type PatchRollout struct {
	DisruptionBudget *FixedOrPercent       `json:"disruptionBudget,omitempty"`
	Mode             *PatchRolloutModeEnum `json:"mode,omitempty"`
}
