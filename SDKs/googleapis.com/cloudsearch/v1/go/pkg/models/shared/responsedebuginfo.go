package shared

type ResponseDebugInfo struct {
	EnabledExperiments []int32 `json:"enabledExperiments,omitempty"`
	FormattedDebugInfo *string `json:"formattedDebugInfo,omitempty"`
}
