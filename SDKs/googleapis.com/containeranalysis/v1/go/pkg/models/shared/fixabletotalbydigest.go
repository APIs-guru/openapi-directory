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

type FixableTotalByDigest struct {
	FixableCount *string                           `json:"fixableCount"`
	ResourceURI  *string                           `json:"resourceUri"`
	Severity     *FixableTotalByDigestSeverityEnum `json:"severity"`
	TotalCount   *string                           `json:"totalCount"`
}
