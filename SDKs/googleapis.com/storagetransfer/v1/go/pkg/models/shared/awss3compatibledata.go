package shared

// AwsS3CompatibleData
// An AwsS3CompatibleData resource.
type AwsS3CompatibleData struct {
	BucketName *string               `json:"bucketName,omitempty"`
	Endpoint   *string               `json:"endpoint,omitempty"`
	Path       *string               `json:"path,omitempty"`
	Region     *string               `json:"region,omitempty"`
	S3Metadata *S3CompatibleMetadata `json:"s3Metadata,omitempty"`
}
