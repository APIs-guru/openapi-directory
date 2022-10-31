package shared

type GcsProfile struct {
	BucketName *string `json:"bucketName,omitempty"`
	RootPath   *string `json:"rootPath,omitempty"`
}
