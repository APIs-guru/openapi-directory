package shared

// ListBucketsResponse
// The response returned by `ListBuckets`.
type ListBucketsResponse struct {
	Buckets       []Bucket `json:"buckets,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
