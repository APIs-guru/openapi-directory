package shared

// CustomAttributeHistogramResult
// Output only. Custom attribute histogram result.
type CustomAttributeHistogramResult struct {
	Key                        *string                 `json:"key,omitempty"`
	LongValueHistogramResult   *NumericBucketingResult `json:"longValueHistogramResult,omitempty"`
	StringValueHistogramResult map[string]int32        `json:"stringValueHistogramResult,omitempty"`
}
