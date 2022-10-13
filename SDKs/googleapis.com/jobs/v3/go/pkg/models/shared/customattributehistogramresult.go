package shared

type CustomAttributeHistogramResult struct {
	Key                        *string                 `json:"key"`
	LongValueHistogramResult   *NumericBucketingResult `json:"longValueHistogramResult"`
	StringValueHistogramResult map[string]int32        `json:"stringValueHistogramResult"`
}
