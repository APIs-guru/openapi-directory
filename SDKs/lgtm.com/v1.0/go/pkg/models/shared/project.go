package shared

type Project struct {
	ID            *int64  `json:"id,omitempty"`
	Name          *string `json:"name,omitempty"`
	URL           *string `json:"url,omitempty"`
	URLIdentifier *string `json:"url-identifier,omitempty"`
}
