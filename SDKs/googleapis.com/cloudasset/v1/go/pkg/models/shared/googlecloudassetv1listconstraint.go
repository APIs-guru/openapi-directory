package shared

// GoogleCloudAssetV1ListConstraint
// A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
type GoogleCloudAssetV1ListConstraint struct {
	SupportsIn    *bool `json:"supportsIn,omitempty"`
	SupportsUnder *bool `json:"supportsUnder,omitempty"`
}
