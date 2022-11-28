package shared

// AwsSecurityGroup
// AwsSecurityGroup describes a security group of an AWS VM.
type AwsSecurityGroup struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
}
