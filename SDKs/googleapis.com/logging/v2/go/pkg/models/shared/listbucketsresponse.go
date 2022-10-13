package shared

type ListBucketsResponse struct {
	Buckets       []LogBucket `json:"buckets"`
	NextPageToken *string     `json:"nextPageToken"`
}
