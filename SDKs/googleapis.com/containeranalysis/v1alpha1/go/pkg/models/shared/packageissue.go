package shared

type PackageIssueEffectiveSeverityEnum string

const (
	PackageIssueEffectiveSeverityEnumSeverityUnspecified PackageIssueEffectiveSeverityEnum = "SEVERITY_UNSPECIFIED"
	PackageIssueEffectiveSeverityEnumMinimal             PackageIssueEffectiveSeverityEnum = "MINIMAL"
	PackageIssueEffectiveSeverityEnumLow                 PackageIssueEffectiveSeverityEnum = "LOW"
	PackageIssueEffectiveSeverityEnumMedium              PackageIssueEffectiveSeverityEnum = "MEDIUM"
	PackageIssueEffectiveSeverityEnumHigh                PackageIssueEffectiveSeverityEnum = "HIGH"
	PackageIssueEffectiveSeverityEnumCritical            PackageIssueEffectiveSeverityEnum = "CRITICAL"
)

type PackageIssue struct {
	AffectedLocation  *VulnerabilityLocation             `json:"affectedLocation"`
	EffectiveSeverity *PackageIssueEffectiveSeverityEnum `json:"effectiveSeverity"`
	FixedLocation     *VulnerabilityLocation             `json:"fixedLocation"`
	PackageType       *string                            `json:"packageType"`
	SeverityName      *string                            `json:"severityName"`
}
