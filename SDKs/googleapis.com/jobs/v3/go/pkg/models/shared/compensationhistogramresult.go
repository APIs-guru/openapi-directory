package shared




type CompensationHistogramResultTypeEnum string

const (
    CompensationHistogramResultTypeEnumCompensationHistogramRequestTypeUnspecified CompensationHistogramResultTypeEnum = "COMPENSATION_HISTOGRAM_REQUEST_TYPE_UNSPECIFIED"
CompensationHistogramResultTypeEnumBase CompensationHistogramResultTypeEnum = "BASE"
CompensationHistogramResultTypeEnumAnnualizedBase CompensationHistogramResultTypeEnum = "ANNUALIZED_BASE"
CompensationHistogramResultTypeEnumAnnualizedTotal CompensationHistogramResultTypeEnum = "ANNUALIZED_TOTAL"
)


type CompensationHistogramResult struct {
    Result *NumericBucketingResult `json:"result,omitempty"`
    Type *CompensationHistogramResultTypeEnum `json:"type,omitempty"`
    
}

