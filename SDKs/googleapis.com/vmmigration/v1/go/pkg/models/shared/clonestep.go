package shared

// CloneStep
// CloneStep holds information about the clone step progress.
type CloneStep struct {
	AdaptingOs              map[string]interface{} `json:"adaptingOs,omitempty"`
	EndTime                 *string                `json:"endTime,omitempty"`
	InstantiatingMigratedVM map[string]interface{} `json:"instantiatingMigratedVm,omitempty"`
	PreparingVMDisks        map[string]interface{} `json:"preparingVmDisks,omitempty"`
	StartTime               *string                `json:"startTime,omitempty"`
}
