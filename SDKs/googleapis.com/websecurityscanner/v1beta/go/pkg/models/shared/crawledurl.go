package shared

type CrawledURL struct {
	Body       *string `json:"body"`
	HTTPMethod *string `json:"httpMethod"`
	URL        *string `json:"url"`
}
