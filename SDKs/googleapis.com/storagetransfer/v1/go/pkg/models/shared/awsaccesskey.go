package shared

type AwsAccessKey struct {
	AccessKeyID     *string `json:"accessKeyId"`
	SecretAccessKey *string `json:"secretAccessKey"`
}
