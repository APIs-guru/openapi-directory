package shared

// ProjectSettings
// Per-project settings for the Tool Results service.
type ProjectSettings struct {
	DefaultBucket *string `json:"defaultBucket,omitempty"`
	Name          *string `json:"name,omitempty"`
}
