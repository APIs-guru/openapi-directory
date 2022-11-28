package shared

// GooglePrivacyDlpV2TransformationErrorHandling
// How to handle transformation errors during de-identification. A transformation error occurs when the requested transformation is incompatible with the data. For example, trying to de-identify an IP address using a `DateShift` transformation would result in a transformation error, since date info cannot be extracted from an IP address. Information about any incompatible transformations, and how they were handled, is returned in the response as part of the `TransformationOverviews`.
type GooglePrivacyDlpV2TransformationErrorHandling struct {
	LeaveUntransformed map[string]interface{} `json:"leaveUntransformed,omitempty"`
	ThrowError         map[string]interface{} `json:"throwError,omitempty"`
}
