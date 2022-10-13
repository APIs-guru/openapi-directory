package shared

type RoboStartingIntent struct {
	LauncherActivity map[string]interface{} `json:"launcherActivity"`
	StartActivity    *StartActivityIntent   `json:"startActivity"`
	Timeout          *string                `json:"timeout"`
}
