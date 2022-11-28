package shared

// ListBucketsResponse
// The response from ListBuckets.
type ListBucketsResponse struct {
	Buckets       []LogBucket `json:"buckets,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
