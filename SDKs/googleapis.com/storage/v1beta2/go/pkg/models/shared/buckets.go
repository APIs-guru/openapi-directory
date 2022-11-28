package shared

// Buckets
// A list of buckets.
type Buckets struct {
	Items         []Bucket `json:"items,omitempty"`
	Kind          *string  `json:"kind,omitempty"`
	NextPageToken *string  `json:"nextPageToken,omitempty"`
}
