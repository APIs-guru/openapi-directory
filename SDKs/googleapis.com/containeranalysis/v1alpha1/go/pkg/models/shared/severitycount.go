package shared

type SeverityCountSeverityEnum string

const (
	SeverityCountSeverityEnumSeverityUnspecified SeverityCountSeverityEnum = "SEVERITY_UNSPECIFIED"
	SeverityCountSeverityEnumMinimal             SeverityCountSeverityEnum = "MINIMAL"
	SeverityCountSeverityEnumLow                 SeverityCountSeverityEnum = "LOW"
	SeverityCountSeverityEnumMedium              SeverityCountSeverityEnum = "MEDIUM"
	SeverityCountSeverityEnumHigh                SeverityCountSeverityEnum = "HIGH"
	SeverityCountSeverityEnumCritical            SeverityCountSeverityEnum = "CRITICAL"
)

type SeverityCount struct {
	Count    *string                    `json:"count,omitempty"`
	Severity *SeverityCountSeverityEnum `json:"severity,omitempty"`
}
