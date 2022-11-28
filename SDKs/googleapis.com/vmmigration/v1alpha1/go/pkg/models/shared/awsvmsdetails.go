package shared

// AwsVmsDetails
// AWSVmsDetails describes VMs in AWS.
type AwsVmsDetails struct {
	Details []AwsVMDetails `json:"details,omitempty"`
}
