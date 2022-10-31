package shared

type SettingsChangeRequest struct {
	TargetURL  string             `json:"targetUrl"`
	Throttling ThrottlingSettings `json:"throttling"`
}
