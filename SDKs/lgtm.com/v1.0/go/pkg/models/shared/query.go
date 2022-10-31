package shared

type Query struct {
	ID         *int64           `json:"id,omitempty"`
	Language   *string          `json:"language,omitempty"`
	Name       *string          `json:"name,omitempty"`
	Pack       *string          `json:"pack,omitempty"`
	Properties *QueryProperties `json:"properties,omitempty"`
	URL        *string          `json:"url,omitempty"`
}
