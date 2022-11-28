package shared

import (
	"time"
)

// SettingsResponse
// Webhook settings for an app.
type SettingsResponse struct {
	CreatedAt  time.Time          `json:"createdAt"`
	TargetURL  string             `json:"targetUrl"`
	Throttling ThrottlingSettings `json:"throttling"`
	UpdatedAt  *time.Time         `json:"updatedAt,omitempty"`
}
