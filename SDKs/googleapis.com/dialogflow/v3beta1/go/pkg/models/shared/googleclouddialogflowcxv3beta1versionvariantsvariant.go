package shared

// GoogleCloudDialogflowCxV3beta1VersionVariantsVariant
// A single flow version with specified traffic allocation.
type GoogleCloudDialogflowCxV3beta1VersionVariantsVariant struct {
	IsControlGroup    *bool    `json:"isControlGroup,omitempty"`
	TrafficAllocation *float32 `json:"trafficAllocation,omitempty"`
	Version           *string  `json:"version,omitempty"`
}
