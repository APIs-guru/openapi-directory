package shared

// CustomAttributeHistogramRequest
// Custom attributes histogram request. An error is thrown if neither string_value_histogram or long_value_histogram_bucketing_option has been defined.
type CustomAttributeHistogramRequest struct {
	Key                               *string                 `json:"key,omitempty"`
	LongValueHistogramBucketingOption *NumericBucketingOption `json:"longValueHistogramBucketingOption,omitempty"`
	StringValueHistogram              *bool                   `json:"stringValueHistogram,omitempty"`
}
