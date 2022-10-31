package shared

type GooRepository struct {
	Name *string `json:"name,omitempty"`
	URL  *string `json:"url,omitempty"`
}
