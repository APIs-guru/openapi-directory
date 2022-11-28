package shared

// CrawledURL
// A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web Security Scanner Service crawls the web applications, following all links within the scope of sites, to find the URLs to test against.
type CrawledURL struct {
	Body       *string `json:"body,omitempty"`
	HTTPMethod *string `json:"httpMethod,omitempty"`
	URL        *string `json:"url,omitempty"`
}
