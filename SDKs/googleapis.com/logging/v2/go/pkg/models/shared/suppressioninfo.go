package shared




type SuppressionInfoReasonEnum string

const (
    SuppressionInfoReasonEnumReasonUnspecified SuppressionInfoReasonEnum = "REASON_UNSPECIFIED"
SuppressionInfoReasonEnumRateLimit SuppressionInfoReasonEnum = "RATE_LIMIT"
SuppressionInfoReasonEnumNotConsumed SuppressionInfoReasonEnum = "NOT_CONSUMED"
)


type SuppressionInfo struct {
    Reason *SuppressionInfoReasonEnum `json:"reason,omitempty"`
    SuppressedCount *int32 `json:"suppressedCount,omitempty"`
    
}

