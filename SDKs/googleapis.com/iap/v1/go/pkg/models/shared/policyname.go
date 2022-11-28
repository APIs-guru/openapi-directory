package shared

// PolicyName
// An internal name for an IAM policy, based on the resource to which the policy applies. Not to be confused with a resource's external full resource name. For more information on this distinction, see go/iam-full-resource-names.
type PolicyName struct {
	ID     *string `json:"id,omitempty"`
	Region *string `json:"region,omitempty"`
	Type   *string `json:"type,omitempty"`
}
