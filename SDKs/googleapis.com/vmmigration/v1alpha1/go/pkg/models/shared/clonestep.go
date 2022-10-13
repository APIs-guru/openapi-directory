package shared

type CloneStep struct {
	AdaptingOs              map[string]interface{} `json:"adaptingOs"`
	EndTime                 *string                `json:"endTime"`
	InstantiatingMigratedVM map[string]interface{} `json:"instantiatingMigratedVm"`
	PreparingVMDisks        map[string]interface{} `json:"preparingVmDisks"`
	StartTime               *string                `json:"startTime"`
}
