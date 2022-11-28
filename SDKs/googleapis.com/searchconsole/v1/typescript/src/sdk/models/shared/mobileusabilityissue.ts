import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MobileUsabilityIssueIssueTypeEnum {
    MobileUsabilityIssueTypeUnspecified = "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED",
    UsesIncompatiblePlugins = "USES_INCOMPATIBLE_PLUGINS",
    ConfigureViewport = "CONFIGURE_VIEWPORT",
    FixedWidthViewport = "FIXED_WIDTH_VIEWPORT",
    SizeContentToViewport = "SIZE_CONTENT_TO_VIEWPORT",
    UseLegibleFontSizes = "USE_LEGIBLE_FONT_SIZES",
    TapTargetsTooClose = "TAP_TARGETS_TOO_CLOSE"
}

export enum MobileUsabilityIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Warning = "WARNING",
    Error = "ERROR"
}


// MobileUsabilityIssue
/** 
 * Mobile-usability issue.
**/
export class MobileUsabilityIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=issueType" })
  issueType?: MobileUsabilityIssueIssueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: MobileUsabilityIssueSeverityEnum;
}
