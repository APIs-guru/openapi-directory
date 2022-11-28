package shared

// RoboStartingIntent
// Message for specifying the start activities to crawl.
type RoboStartingIntent struct {
	LauncherActivity map[string]interface{} `json:"launcherActivity,omitempty"`
	StartActivity    *StartActivityIntent   `json:"startActivity,omitempty"`
	Timeout          *string                `json:"timeout,omitempty"`
}
