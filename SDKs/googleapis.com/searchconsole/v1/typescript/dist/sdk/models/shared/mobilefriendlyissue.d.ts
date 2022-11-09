import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum MobileFriendlyIssueRuleEnum {
    MobileFriendlyRuleUnspecified = "MOBILE_FRIENDLY_RULE_UNSPECIFIED",
    UsesIncompatiblePlugins = "USES_INCOMPATIBLE_PLUGINS",
    ConfigureViewport = "CONFIGURE_VIEWPORT",
    FixedWidthViewport = "FIXED_WIDTH_VIEWPORT",
    SizeContentToViewport = "SIZE_CONTENT_TO_VIEWPORT",
    UseLegibleFontSizes = "USE_LEGIBLE_FONT_SIZES",
    TapTargetsTooClose = "TAP_TARGETS_TOO_CLOSE"
}
/**
 * Mobile-friendly issue.
**/
export declare class MobileFriendlyIssue extends SpeakeasyBase {
    rule?: MobileFriendlyIssueRuleEnum;
}
