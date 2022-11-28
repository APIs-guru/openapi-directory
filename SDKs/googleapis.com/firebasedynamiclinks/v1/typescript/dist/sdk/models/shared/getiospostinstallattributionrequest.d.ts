import { SpeakeasyBase } from "../../../internal/utils";
import { DeviceInfo } from "./deviceinfo";
export declare enum GetIosPostInstallAttributionRequestRetrievalMethodEnum {
    UnknownPayloadRetrievalMethod = "UNKNOWN_PAYLOAD_RETRIEVAL_METHOD",
    ImplicitWeakMatch = "IMPLICIT_WEAK_MATCH",
    ExplicitWeakMatch = "EXPLICIT_WEAK_MATCH",
    ExplicitStrongAfterWeakMatch = "EXPLICIT_STRONG_AFTER_WEAK_MATCH"
}
export declare enum GetIosPostInstallAttributionRequestVisualStyleEnum {
    UnknownVisualStyle = "UNKNOWN_VISUAL_STYLE",
    DefaultStyle = "DEFAULT_STYLE",
    CustomStyle = "CUSTOM_STYLE"
}
/**
 * Request for iSDK to execute strong match flow for post-install attribution. This is meant for iOS requests only. Requests from other platforms will not be honored.
**/
export declare class GetIosPostInstallAttributionRequest extends SpeakeasyBase {
    appInstallationTime?: string;
    bundleId?: string;
    device?: DeviceInfo;
    iosVersion?: string;
    retrievalMethod?: GetIosPostInstallAttributionRequestRetrievalMethodEnum;
    sdkVersion?: string;
    uniqueMatchLinkToCheck?: string;
    visualStyle?: GetIosPostInstallAttributionRequestVisualStyleEnum;
}
