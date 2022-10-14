package shared

type CustomAttributeHistogramResult struct {
	Key                        *string                 `json:"key,omitempty"`
	LongValueHistogramResult   *NumericBucketingResult `json:"longValueHistogramResult,omitempty"`
	StringValueHistogramResult map[string]int32        `json:"stringValueHistogramResult,omitempty"`
}
