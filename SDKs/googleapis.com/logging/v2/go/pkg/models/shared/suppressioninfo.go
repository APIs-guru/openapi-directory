package shared

type SuppressionInfoReasonEnum string

const (
	SuppressionInfoReasonEnumReasonUnspecified SuppressionInfoReasonEnum = "REASON_UNSPECIFIED"
	SuppressionInfoReasonEnumRateLimit         SuppressionInfoReasonEnum = "RATE_LIMIT"
	SuppressionInfoReasonEnumNotConsumed       SuppressionInfoReasonEnum = "NOT_CONSUMED"
)

// SuppressionInfo
// Information about entries that were omitted from the session.
type SuppressionInfo struct {
	Reason          *SuppressionInfoReasonEnum `json:"reason,omitempty"`
	SuppressedCount *int32                     `json:"suppressedCount,omitempty"`
}
