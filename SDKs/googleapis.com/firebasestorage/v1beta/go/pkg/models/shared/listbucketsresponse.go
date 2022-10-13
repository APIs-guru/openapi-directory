package shared

type ListBucketsResponse struct {
	Buckets       []Bucket `json:"buckets"`
	NextPageToken *string  `json:"nextPageToken"`
}
