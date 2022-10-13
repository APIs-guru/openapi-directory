package shared

type DynamicTargetingKeysListResponse struct {
	DynamicTargetingKeys []DynamicTargetingKey `json:"dynamicTargetingKeys"`
	Kind                 *string               `json:"kind"`
}
