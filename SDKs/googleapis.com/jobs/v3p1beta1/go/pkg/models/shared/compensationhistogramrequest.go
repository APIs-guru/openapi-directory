package shared




type CompensationHistogramRequestTypeEnum string

const (
    CompensationHistogramRequestTypeEnumCompensationHistogramRequestTypeUnspecified CompensationHistogramRequestTypeEnum = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
CompensationHistogramRequestTypeEnumBase CompensationHistogramRequestTypeEnum = "BASE"
CompensationHistogramRequestTypeEnumAnnualizedBase CompensationHistogramRequestTypeEnum = "ANNUALIZED_BASE"
CompensationHistogramRequestTypeEnumAnnualizedTotal CompensationHistogramRequestTypeEnum = "ANNUALIZED_TOTAL"
)


type CompensationHistogramRequest struct {
    BucketingOption *NumericBucketingOption `json:"bucketingOption,omitempty"`
    Type *CompensationHistogramRequestTypeEnum `json:"type,omitempty"`
    
}

