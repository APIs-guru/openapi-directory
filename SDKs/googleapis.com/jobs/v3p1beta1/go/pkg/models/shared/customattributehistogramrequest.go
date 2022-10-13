package shared

type CustomAttributeHistogramRequest struct {
	Key                               *string                 `json:"key"`
	LongValueHistogramBucketingOption *NumericBucketingOption `json:"longValueHistogramBucketingOption"`
	StringValueHistogram              *bool                   `json:"stringValueHistogram"`
}
