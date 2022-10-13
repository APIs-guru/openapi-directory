package shared

type AwsS3Data struct {
	AwsAccessKey *AwsAccessKey `json:"awsAccessKey"`
	BucketName   *string       `json:"bucketName"`
	Path         *string       `json:"path"`
	RoleArn      *string       `json:"roleArn"`
}
