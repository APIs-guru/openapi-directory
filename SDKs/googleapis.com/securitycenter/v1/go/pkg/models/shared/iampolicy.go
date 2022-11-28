package shared

// IamPolicy
// Cloud IAM Policy information associated with the Google Cloud resource described by the Security Command Center asset. This information is managed and defined by the Google Cloud resource and cannot be modified by the user.
type IamPolicy struct {
	PolicyBlob *string `json:"policyBlob,omitempty"`
}
