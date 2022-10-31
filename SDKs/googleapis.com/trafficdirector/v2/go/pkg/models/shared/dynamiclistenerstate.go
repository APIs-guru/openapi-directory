package shared

type DynamicListenerState struct {
	LastUpdated *string                `json:"lastUpdated,omitempty"`
	Listener    map[string]interface{} `json:"listener,omitempty"`
	VersionInfo *string                `json:"versionInfo,omitempty"`
}
