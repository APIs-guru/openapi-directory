import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse
/** 
 * Response containing counts for devices that need attention.
**/
export class GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=noRecentPolicySyncCount" })
  noRecentPolicySyncCount?: string;

  @Metadata({ data: "json, name=noRecentUserActivityCount" })
  noRecentUserActivityCount?: string;

  @Metadata({ data: "json, name=osVersionNotCompliantCount" })
  osVersionNotCompliantCount?: string;

  @Metadata({ data: "json, name=pendingUpdate" })
  pendingUpdate?: string;

  @Metadata({ data: "json, name=unsupportedPolicyCount" })
  unsupportedPolicyCount?: string;
}
