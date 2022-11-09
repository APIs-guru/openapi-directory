import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MobileUsabilityIssueIssueTypeEnum {
    MobileUsabilityIssueTypeUnspecified = "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED"
,    UsesIncompatiblePlugins = "USES_INCOMPATIBLE_PLUGINS"
,    ConfigureViewport = "CONFIGURE_VIEWPORT"
,    FixedWidthViewport = "FIXED_WIDTH_VIEWPORT"
,    SizeContentToViewport = "SIZE_CONTENT_TO_VIEWPORT"
,    UseLegibleFontSizes = "USE_LEGIBLE_FONT_SIZES"
,    TapTargetsTooClose = "TAP_TARGETS_TOO_CLOSE"
}

export enum MobileUsabilityIssueSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Warning = "WARNING"
,    Error = "ERROR"
}


// MobileUsabilityIssue
/** 
 * Mobile-usability issue.
**/
export class MobileUsabilityIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=issueType" })
  issueType?: MobileUsabilityIssueIssueTypeEnum;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: MobileUsabilityIssueSeverityEnum;
}
