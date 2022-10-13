package shared

type AwsS3CompatibleData struct {
	BucketName *string               `json:"bucketName"`
	Endpoint   *string               `json:"endpoint"`
	Path       *string               `json:"path"`
	Region     *string               `json:"region"`
	S3Metadata *S3CompatibleMetadata `json:"s3Metadata"`
}
