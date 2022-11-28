package shared

// GoogleAppsScriptTypeWebAppEntryPoint
// A web application entry point.
type GoogleAppsScriptTypeWebAppEntryPoint struct {
	EntryPointConfig *GoogleAppsScriptTypeWebAppConfig `json:"entryPointConfig,omitempty"`
	URL              *string                           `json:"url,omitempty"`
}
