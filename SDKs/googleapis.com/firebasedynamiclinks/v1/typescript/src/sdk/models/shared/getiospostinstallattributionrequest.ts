import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceInfo } from "./deviceinfo";


export enum GetIosPostInstallAttributionRequestRetrievalMethodEnum {
    UnknownPayloadRetrievalMethod = "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD",
    ImplicitWeakMatch = "IMPLICIT_WEAK_MATCH",
    ExplicitWeakMatch = "EXPLICIT_WEAK_MATCH",
    ExplicitStrongAfterWeakMatch = "EXPLICIT_STRONG_AFTER_WEAK_MATCH"
}

export enum GetIosPostInstallAttributionRequestVisualStyleEnum {
    UnknownVisualStyle = "UNKNOWN_VISUAL_STYLE",
    DefaultStyle = "DEFAULT_STYLE",
    CustomStyle = "CUSTOM_STYLE"
}


// GetIosPostInstallAttributionRequest
/** 
 * Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.
**/
export class GetIosPostInstallAttributionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appInstallationTime" })
  appInstallationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=bundleId" })
  bundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: DeviceInfo;

  @SpeakeasyMetadata({ data: "json, name=iosVersion" })
  iosVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=retrievalMethod" })
  retrievalMethod?: GetIosPostInstallAttributionRequestRetrievalMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=sdkVersion" })
  sdkVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=uniqueMatchLinkToCheck" })
  uniqueMatchLinkToCheck?: string;

  @SpeakeasyMetadata({ data: "json, name=visualStyle" })
  visualStyle?: GetIosPostInstallAttributionRequestVisualStyleEnum;
}
