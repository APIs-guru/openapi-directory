package shared

type GcsProfile struct {
	BucketName *string `json:"bucketName"`
	RootPath   *string `json:"rootPath"`
}
