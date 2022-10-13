package shared

type DynamicListenerState struct {
	LastUpdated *string                `json:"lastUpdated"`
	Listener    map[string]interface{} `json:"listener"`
	VersionInfo *string                `json:"versionInfo"`
}
