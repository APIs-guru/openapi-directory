package shared

// MailOptions
// Additional options for Gmail search
type MailOptions struct {
	ExcludeDrafts *bool `json:"excludeDrafts,omitempty"`
}
