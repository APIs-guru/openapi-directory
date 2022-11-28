package shared

// AppEngineVersionInfo
// For display only. Metadata associated with an App Engine version.
type AppEngineVersionInfo struct {
	DisplayName *string `json:"displayName,omitempty"`
	Environment *string `json:"environment,omitempty"`
	Runtime     *string `json:"runtime,omitempty"`
	URI         *string `json:"uri,omitempty"`
}
