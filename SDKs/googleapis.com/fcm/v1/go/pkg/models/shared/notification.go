package shared

// Notification
// Basic notification template to use across all platforms.
type Notification struct {
	Body  *string `json:"body,omitempty"`
	Image *string `json:"image,omitempty"`
	Title *string `json:"title,omitempty"`
}
