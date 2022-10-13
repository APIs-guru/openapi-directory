package shared

type PatchRolloutModeEnum string

const (
	PatchRolloutModeEnumModeUnspecified PatchRolloutModeEnum = "MODE_UNSPECIFIED"
	PatchRolloutModeEnumZoneByZone      PatchRolloutModeEnum = "ZONE_BY_ZONE"
	PatchRolloutModeEnumConcurrentZones PatchRolloutModeEnum = "CONCURRENT_ZONES"
)

type PatchRollout struct {
	DisruptionBudget *FixedOrPercent       `json:"disruptionBudget"`
	Mode             *PatchRolloutModeEnum `json:"mode"`
}
