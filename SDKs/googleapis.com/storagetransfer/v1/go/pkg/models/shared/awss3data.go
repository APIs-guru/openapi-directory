package shared



type AwsS3Data struct {
    AwsAccessKey *AwsAccessKey `json:"awsAccessKey,omitempty"`
    BucketName *string `json:"bucketName,omitempty"`
    Path *string `json:"path,omitempty"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

