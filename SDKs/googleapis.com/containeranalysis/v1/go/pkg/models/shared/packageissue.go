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

// PackageIssueInput
// A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
type PackageIssueInput struct {
	AffectedCpeURI  *string                 `json:"affectedCpeUri,omitempty"`
	AffectedPackage *string                 `json:"affectedPackage,omitempty"`
	AffectedVersion *Version                `json:"affectedVersion,omitempty"`
	FileLocation    []GrafeasV1FileLocation `json:"fileLocation,omitempty"`
	FixAvailable    *bool                   `json:"fixAvailable,omitempty"`
	FixedCpeURI     *string                 `json:"fixedCpeUri,omitempty"`
	FixedPackage    *string                 `json:"fixedPackage,omitempty"`
	FixedVersion    *Version                `json:"fixedVersion,omitempty"`
	PackageType     *string                 `json:"packageType,omitempty"`
}

// PackageIssue
// A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
type PackageIssue struct {
	AffectedCpeURI    *string                            `json:"affectedCpeUri,omitempty"`
	AffectedPackage   *string                            `json:"affectedPackage,omitempty"`
	AffectedVersion   *Version                           `json:"affectedVersion,omitempty"`
	EffectiveSeverity *PackageIssueEffectiveSeverityEnum `json:"effectiveSeverity,omitempty"`
	FileLocation      []GrafeasV1FileLocation            `json:"fileLocation,omitempty"`
	FixAvailable      *bool                              `json:"fixAvailable,omitempty"`
	FixedCpeURI       *string                            `json:"fixedCpeUri,omitempty"`
	FixedPackage      *string                            `json:"fixedPackage,omitempty"`
	FixedVersion      *Version                           `json:"fixedVersion,omitempty"`
	PackageType       *string                            `json:"packageType,omitempty"`
}
