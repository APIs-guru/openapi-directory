package shared

// GoogleCloudDataplexV1ActionFailedSecurityPolicyApply
// Failed to apply security policy to the managed resource(s) under a lake, zone or an asset. For a lake or zone resource, one or more underlying assets has a failure applying security policy to the associated managed resource.
type GoogleCloudDataplexV1ActionFailedSecurityPolicyApply struct {
	Asset *string `json:"asset,omitempty"`
}
