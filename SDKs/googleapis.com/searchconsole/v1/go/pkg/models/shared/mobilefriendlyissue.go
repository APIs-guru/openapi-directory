package shared

type MobileFriendlyIssueRuleEnum string

const (
	MobileFriendlyIssueRuleEnumMobileFriendlyRuleUnspecified MobileFriendlyIssueRuleEnum = "MOBILE_FRIENDLY_RULE_UNSPECIFIED"
	MobileFriendlyIssueRuleEnumUsesIncompatiblePlugins       MobileFriendlyIssueRuleEnum = "USES_INCOMPATIBLE_PLUGINS"
	MobileFriendlyIssueRuleEnumConfigureViewport             MobileFriendlyIssueRuleEnum = "CONFIGURE_VIEWPORT"
	MobileFriendlyIssueRuleEnumFixedWidthViewport            MobileFriendlyIssueRuleEnum = "FIXED_WIDTH_VIEWPORT"
	MobileFriendlyIssueRuleEnumSizeContentToViewport         MobileFriendlyIssueRuleEnum = "SIZE_CONTENT_TO_VIEWPORT"
	MobileFriendlyIssueRuleEnumUseLegibleFontSizes           MobileFriendlyIssueRuleEnum = "USE_LEGIBLE_FONT_SIZES"
	MobileFriendlyIssueRuleEnumTapTargetsTooClose            MobileFriendlyIssueRuleEnum = "TAP_TARGETS_TOO_CLOSE"
)

type MobileFriendlyIssue struct {
	Rule *MobileFriendlyIssueRuleEnum `json:"rule,omitempty"`
}
