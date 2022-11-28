package shared

// ObjectRequestOptions
// Configures what properties of the enrolled CRM object are included in the action execution request
type ObjectRequestOptions struct {
	Properties []string `json:"properties"`
}
