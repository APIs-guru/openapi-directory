package shared

// AwsS3Data
// An AwsS3Data resource can be a data source, but not a data sink. In an AwsS3Data resource, an object's name is the S3 object's key name.
type AwsS3Data struct {
	AwsAccessKey *AwsAccessKey `json:"awsAccessKey,omitempty"`
	BucketName   *string       `json:"bucketName,omitempty"`
	Path         *string       `json:"path,omitempty"`
	RoleArn      *string       `json:"roleArn,omitempty"`
}
