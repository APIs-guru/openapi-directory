package shared

// SettingsChangeRequest
// New or updated webhook settings for an app.
type SettingsChangeRequest struct {
	TargetURL  string             `json:"targetUrl"`
	Throttling ThrottlingSettings `json:"throttling"`
}
