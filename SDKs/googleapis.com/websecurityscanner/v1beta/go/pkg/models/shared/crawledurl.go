package shared

type CrawledURL struct {
	Body       *string `json:"body,omitempty"`
	HTTPMethod *string `json:"httpMethod,omitempty"`
	URL        *string `json:"url,omitempty"`
}
