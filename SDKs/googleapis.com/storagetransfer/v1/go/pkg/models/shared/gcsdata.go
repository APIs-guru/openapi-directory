package shared

type GcsData struct {
	BucketName *string `json:"bucketName,omitempty"`
	Path       *string `json:"path,omitempty"`
}
