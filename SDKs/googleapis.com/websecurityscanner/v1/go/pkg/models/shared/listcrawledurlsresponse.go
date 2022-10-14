package shared

type ListCrawledUrlsResponse struct {
	CrawledUrls   []CrawledURL `json:"crawledUrls,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
