package shared

type FixableTotalByDigestSeverityEnum string

const (
	FixableTotalByDigestSeverityEnumSeverityUnspecified FixableTotalByDigestSeverityEnum = "SEVERITY_UNSPECIFIED"
	FixableTotalByDigestSeverityEnumMinimal             FixableTotalByDigestSeverityEnum = "MINIMAL"
	FixableTotalByDigestSeverityEnumLow                 FixableTotalByDigestSeverityEnum = "LOW"
	FixableTotalByDigestSeverityEnumMedium              FixableTotalByDigestSeverityEnum = "MEDIUM"
	FixableTotalByDigestSeverityEnumHigh                FixableTotalByDigestSeverityEnum = "HIGH"
	FixableTotalByDigestSeverityEnumCritical            FixableTotalByDigestSeverityEnum = "CRITICAL"
)

// FixableTotalByDigest
// Per resource and severity counts of fixable and total vulnerabilities.
type FixableTotalByDigest struct {
	FixableCount *string                           `json:"fixableCount,omitempty"`
	Resource     *Resource                         `json:"resource,omitempty"`
	Severity     *FixableTotalByDigestSeverityEnum `json:"severity,omitempty"`
	TotalCount   *string                           `json:"totalCount,omitempty"`
}
