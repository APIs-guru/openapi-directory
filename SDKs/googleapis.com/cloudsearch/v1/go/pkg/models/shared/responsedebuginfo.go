package shared

type ResponseDebugInfo struct {
	EnabledExperiments []int32 `json:"enabledExperiments"`
	FormattedDebugInfo *string `json:"formattedDebugInfo"`
}
