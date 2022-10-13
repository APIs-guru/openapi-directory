package shared

type ListCrawledUrlsResponse struct {
	CrawledUrls   []CrawledURL `json:"crawledUrls"`
	NextPageToken *string      `json:"nextPageToken"`
}
