package shared




type PackageIssueEffectiveSeverityEnum string

const (
    PackageIssueEffectiveSeverityEnumSeverityUnspecified PackageIssueEffectiveSeverityEnum = "SEVERITY_UNSPECIFIED"
PackageIssueEffectiveSeverityEnumMinimal PackageIssueEffectiveSeverityEnum = "MINIMAL"
PackageIssueEffectiveSeverityEnumLow PackageIssueEffectiveSeverityEnum = "LOW"
PackageIssueEffectiveSeverityEnumMedium PackageIssueEffectiveSeverityEnum = "MEDIUM"
PackageIssueEffectiveSeverityEnumHigh PackageIssueEffectiveSeverityEnum = "HIGH"
PackageIssueEffectiveSeverityEnumCritical PackageIssueEffectiveSeverityEnum = "CRITICAL"
)


type PackageIssue struct {
    AffectedLocation *VulnerabilityLocation `json:"affectedLocation,omitempty"`
    EffectiveSeverity *PackageIssueEffectiveSeverityEnum `json:"effectiveSeverity,omitempty"`
    FixedLocation *VulnerabilityLocation `json:"fixedLocation,omitempty"`
    PackageType *string `json:"packageType,omitempty"`
    SeverityName *string `json:"severityName,omitempty"`
    
}

