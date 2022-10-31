package shared

type Organisation struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}
