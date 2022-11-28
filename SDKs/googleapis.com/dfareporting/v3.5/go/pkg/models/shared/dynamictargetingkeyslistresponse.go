package shared

// DynamicTargetingKeysListResponse
// Dynamic Targeting Key List Response
type DynamicTargetingKeysListResponse struct {
	DynamicTargetingKeys []DynamicTargetingKey `json:"dynamicTargetingKeys,omitempty"`
	Kind                 *string               `json:"kind,omitempty"`
}
