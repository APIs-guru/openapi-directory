import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetIosPostInstallAttributionResponseAttributionConfidenceEnum {
    UnknownAttributionConfidence = "UNKNOWN_ATTRIBUTION_CONFIDENCE",
    Weak = "WEAK",
    Default = "DEFAULT",
    Unique = "UNIQUE"
}

export enum GetIosPostInstallAttributionResponseRequestIpVersionEnum {
    UnknownIpVersion = "UNKNOWN_IP_VERSION",
    IpV4 = "IP_V4",
    IpV6 = "IP_V6"
}


// GetIosPostInstallAttributionResponse
/** 
 * Response for iSDK to execute strong match flow for post-install attribution.
**/
export class GetIosPostInstallAttributionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appMinimumVersion" })
  appMinimumVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=attributionConfidence" })
  attributionConfidence?: GetIosPostInstallAttributionResponseAttributionConfidenceEnum;

  @SpeakeasyMetadata({ data: "json, name=deepLink" })
  deepLink?: string;

  @SpeakeasyMetadata({ data: "json, name=externalBrowserDestinationLink" })
  externalBrowserDestinationLink?: string;

  @SpeakeasyMetadata({ data: "json, name=fallbackLink" })
  fallbackLink?: string;

  @SpeakeasyMetadata({ data: "json, name=invitationId" })
  invitationId?: string;

  @SpeakeasyMetadata({ data: "json, name=isStrongMatchExecutable" })
  isStrongMatchExecutable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=matchMessage" })
  matchMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=requestIpVersion" })
  requestIpVersion?: GetIosPostInstallAttributionResponseRequestIpVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=requestedLink" })
  requestedLink?: string;

  @SpeakeasyMetadata({ data: "json, name=resolvedLink" })
  resolvedLink?: string;

  @SpeakeasyMetadata({ data: "json, name=utmCampaign" })
  utmCampaign?: string;

  @SpeakeasyMetadata({ data: "json, name=utmContent" })
  utmContent?: string;

  @SpeakeasyMetadata({ data: "json, name=utmMedium" })
  utmMedium?: string;

  @SpeakeasyMetadata({ data: "json, name=utmSource" })
  utmSource?: string;

  @SpeakeasyMetadata({ data: "json, name=utmTerm" })
  utmTerm?: string;
}
