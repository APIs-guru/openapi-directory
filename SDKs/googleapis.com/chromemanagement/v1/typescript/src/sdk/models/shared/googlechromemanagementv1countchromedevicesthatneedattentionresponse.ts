import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse
/** 
 * Response containing counts for devices that need attention.
**/
export class GoogleChromeManagementV1CountChromeDevicesThatNeedAttentionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=noRecentPolicySyncCount" })
  noRecentPolicySyncCount?: string;

  @SpeakeasyMetadata({ data: "json, name=noRecentUserActivityCount" })
  noRecentUserActivityCount?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersionNotCompliantCount" })
  osVersionNotCompliantCount?: string;

  @SpeakeasyMetadata({ data: "json, name=pendingUpdate" })
  pendingUpdate?: string;

  @SpeakeasyMetadata({ data: "json, name=unsupportedPolicyCount" })
  unsupportedPolicyCount?: string;
}
