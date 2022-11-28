import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MobileUsabilityIssueIssueTypeEnum {
    MobileUsabilityIssueTypeUnspecified = "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED",
    UsesIncompatiblePlugins = "USES_INCOMPATIBLE_PLUGINS",
    ConfigureViewport = "CONFIGURE_VIEWPORT",
    FixedWidthViewport = "FIXED_WIDTH_VIEWPORT",
    SizeContentToViewport = "SIZE_CONTENT_TO_VIEWPORT",
    UseLegibleFontSizes = "USE_LEGIBLE_FONT_SIZES",
    TapTargetsTooClose = "TAP_TARGETS_TOO_CLOSE"
}
export declare enum MobileUsabilityIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Mobile-usability issue.
**/
export declare class MobileUsabilityIssue extends SpeakeasyBase {
    issueType?: MobileUsabilityIssueIssueTypeEnum;
    message?: string;
    severity?: MobileUsabilityIssueSeverityEnum;
}
