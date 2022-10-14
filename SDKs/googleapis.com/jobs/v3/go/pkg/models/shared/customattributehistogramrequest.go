package shared

type CustomAttributeHistogramRequest struct {
	Key                               *string                 `json:"key,omitempty"`
	LongValueHistogramBucketingOption *NumericBucketingOption `json:"longValueHistogramBucketingOption,omitempty"`
	StringValueHistogram              *bool                   `json:"stringValueHistogram,omitempty"`
}
