package shared

type ListBucketsResponse struct {
	Buckets       []LogBucket `json:"buckets,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
