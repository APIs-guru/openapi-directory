import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GetIosPostInstallAttributionResponseAttributionConfidenceEnum {
    UnknownAttributionConfidence = "UNKNOWN_ATTRIBUTION_CONFIDENCE"
,    Weak = "WEAK"
,    Default = "DEFAULT"
,    Unique = "UNIQUE"
}

export enum GetIosPostInstallAttributionResponseRequestIpVersionEnum {
    UnknownIpVersion = "UNKNOWN_IP_VERSION"
,    IpV4 = "IP_V4"
,    IpV6 = "IP_V6"
}


// GetIosPostInstallAttributionResponse
/** 
 * Response for iSDK to execute strong match flow for post-install attribution.
**/
export class GetIosPostInstallAttributionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=appMinimumVersion" })
  appMinimumVersion?: string;

  @Metadata({ data: "json, name=attributionConfidence" })
  attributionConfidence?: GetIosPostInstallAttributionResponseAttributionConfidenceEnum;

  @Metadata({ data: "json, name=deepLink" })
  deepLink?: string;

  @Metadata({ data: "json, name=externalBrowserDestinationLink" })
  externalBrowserDestinationLink?: string;

  @Metadata({ data: "json, name=fallbackLink" })
  fallbackLink?: string;

  @Metadata({ data: "json, name=invitationId" })
  invitationId?: string;

  @Metadata({ data: "json, name=isStrongMatchExecutable" })
  isStrongMatchExecutable?: boolean;

  @Metadata({ data: "json, name=matchMessage" })
  matchMessage?: string;

  @Metadata({ data: "json, name=requestIpVersion" })
  requestIpVersion?: GetIosPostInstallAttributionResponseRequestIpVersionEnum;

  @Metadata({ data: "json, name=requestedLink" })
  requestedLink?: string;

  @Metadata({ data: "json, name=resolvedLink" })
  resolvedLink?: string;

  @Metadata({ data: "json, name=utmCampaign" })
  utmCampaign?: string;

  @Metadata({ data: "json, name=utmContent" })
  utmContent?: string;

  @Metadata({ data: "json, name=utmMedium" })
  utmMedium?: string;

  @Metadata({ data: "json, name=utmSource" })
  utmSource?: string;

  @Metadata({ data: "json, name=utmTerm" })
  utmTerm?: string;
}
