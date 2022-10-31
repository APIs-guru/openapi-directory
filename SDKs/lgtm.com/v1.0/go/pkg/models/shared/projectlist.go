package shared

type ProjectList struct {
	Data        []Project `json:"data,omitempty"`
	NextPageURL *string   `json:"nextPageUrl,omitempty"`
}
