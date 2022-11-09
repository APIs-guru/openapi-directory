import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetIosPostInstallAttributionResponseAttributionConfidenceEnum {
    UnknownAttributionConfidence = "UNKNOWN_ATTRIBUTION_CONFIDENCE",
    Weak = "WEAK",
    Default = "DEFAULT",
    Unique = "UNIQUE"
}
export declare enum GetIosPostInstallAttributionResponseRequestIpVersionEnum {
    UnknownIpVersion = "UNKNOWN_IP_VERSION",
    IpV4 = "IP_V4",
    IpV6 = "IP_V6"
}
/**
 * Response for iSDK to execute strong match flow for post-install attribution.
**/
export declare class GetIosPostInstallAttributionResponse extends SpeakeasyBase {
    appMinimumVersion?: string;
    attributionConfidence?: GetIosPostInstallAttributionResponseAttributionConfidenceEnum;
    deepLink?: string;
    externalBrowserDestinationLink?: string;
    fallbackLink?: string;
    invitationId?: string;
    isStrongMatchExecutable?: boolean;
    matchMessage?: string;
    requestIpVersion?: GetIosPostInstallAttributionResponseRequestIpVersionEnum;
    requestedLink?: string;
    resolvedLink?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmMedium?: string;
    utmSource?: string;
    utmTerm?: string;
}
