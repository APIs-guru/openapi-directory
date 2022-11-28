import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MobileFriendlyIssueRuleEnum {
    MobileFriendlyRuleUnspecified = "MOBILE_FRIENDLY_RULE_UNSPECIFIED",
    UsesIncompatiblePlugins = "USES_INCOMPATIBLE_PLUGINS",
    ConfigureViewport = "CONFIGURE_VIEWPORT",
    FixedWidthViewport = "FIXED_WIDTH_VIEWPORT",
    SizeContentToViewport = "SIZE_CONTENT_TO_VIEWPORT",
    UseLegibleFontSizes = "USE_LEGIBLE_FONT_SIZES",
    TapTargetsTooClose = "TAP_TARGETS_TOO_CLOSE"
}


// MobileFriendlyIssue
/** 
 * Mobile-friendly issue.
**/
export class MobileFriendlyIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: MobileFriendlyIssueRuleEnum;
}
