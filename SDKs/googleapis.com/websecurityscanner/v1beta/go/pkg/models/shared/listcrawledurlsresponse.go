package shared

// ListCrawledUrlsResponse
// Response for the `ListCrawledUrls` method.
type ListCrawledUrlsResponse struct {
	CrawledUrls   []CrawledURL `json:"crawledUrls,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
