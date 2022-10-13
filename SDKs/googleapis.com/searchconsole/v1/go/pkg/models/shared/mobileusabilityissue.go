package shared

type MobileUsabilityIssueIssueTypeEnum string

const (
	MobileUsabilityIssueIssueTypeEnumMobileUsabilityIssueTypeUnspecified MobileUsabilityIssueIssueTypeEnum = "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED"
	MobileUsabilityIssueIssueTypeEnumUsesIncompatiblePlugins             MobileUsabilityIssueIssueTypeEnum = "USES_INCOMPATIBLE_PLUGINS"
	MobileUsabilityIssueIssueTypeEnumConfigureViewport                   MobileUsabilityIssueIssueTypeEnum = "CONFIGURE_VIEWPORT"
	MobileUsabilityIssueIssueTypeEnumFixedWidthViewport                  MobileUsabilityIssueIssueTypeEnum = "FIXED_WIDTH_VIEWPORT"
	MobileUsabilityIssueIssueTypeEnumSizeContentToViewport               MobileUsabilityIssueIssueTypeEnum = "SIZE_CONTENT_TO_VIEWPORT"
	MobileUsabilityIssueIssueTypeEnumUseLegibleFontSizes                 MobileUsabilityIssueIssueTypeEnum = "USE_LEGIBLE_FONT_SIZES"
	MobileUsabilityIssueIssueTypeEnumTapTargetsTooClose                  MobileUsabilityIssueIssueTypeEnum = "TAP_TARGETS_TOO_CLOSE"
)

type MobileUsabilityIssueSeverityEnum string

const (
	MobileUsabilityIssueSeverityEnumSeverityUnspecified MobileUsabilityIssueSeverityEnum = "SEVERITY_UNSPECIFIED"
	MobileUsabilityIssueSeverityEnumWarning             MobileUsabilityIssueSeverityEnum = "WARNING"
	MobileUsabilityIssueSeverityEnumError               MobileUsabilityIssueSeverityEnum = "ERROR"
)

type MobileUsabilityIssue struct {
	IssueType *MobileUsabilityIssueIssueTypeEnum `json:"issueType"`
	Message   *string                            `json:"message"`
	Severity  *MobileUsabilityIssueSeverityEnum  `json:"severity"`
}
