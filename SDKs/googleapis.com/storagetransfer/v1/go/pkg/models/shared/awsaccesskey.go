package shared

// AwsAccessKey
// AWS access key (see [AWS Security Credentials](https://docs.aws.amazon.com/general/latest/gr/aws-security-credentials.html)). For information on our data retention policy for user credentials, see [User credentials](/storage-transfer/docs/data-retention#user-credentials).
type AwsAccessKey struct {
	AccessKeyID     *string `json:"accessKeyId,omitempty"`
	SecretAccessKey *string `json:"secretAccessKey,omitempty"`
}
