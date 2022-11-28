package shared

// GoogleCloudOrgpolicyV2ConstraintListConstraint
// A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
type GoogleCloudOrgpolicyV2ConstraintListConstraint struct {
	SupportsIn    *bool `json:"supportsIn,omitempty"`
	SupportsUnder *bool `json:"supportsUnder,omitempty"`
}
