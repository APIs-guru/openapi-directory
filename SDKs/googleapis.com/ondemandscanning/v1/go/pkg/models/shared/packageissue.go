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
	AffectedCpeURI    *string                            `json:"affectedCpeUri"`
	AffectedPackage   *string                            `json:"affectedPackage"`
	AffectedVersion   *Version                           `json:"affectedVersion"`
	EffectiveSeverity *PackageIssueEffectiveSeverityEnum `json:"effectiveSeverity"`
	FileLocation      []GrafeasV1FileLocation            `json:"fileLocation"`
	FixAvailable      *bool                              `json:"fixAvailable"`
	FixedCpeURI       *string                            `json:"fixedCpeUri"`
	FixedPackage      *string                            `json:"fixedPackage"`
	FixedVersion      *Version                           `json:"fixedVersion"`
	PackageType       *string                            `json:"packageType"`
}
