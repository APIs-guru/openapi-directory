package shared

type Buckets struct {
	Items         []Bucket `json:"items"`
	Kind          *string  `json:"kind"`
	NextPageToken *string  `json:"nextPageToken"`
}
