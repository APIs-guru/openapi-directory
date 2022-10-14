package shared

type RoboStartingIntent struct {
	LauncherActivity map[string]interface{} `json:"launcherActivity,omitempty"`
	StartActivity    *StartActivityIntent   `json:"startActivity,omitempty"`
	Timeout          *string                `json:"timeout,omitempty"`
}
