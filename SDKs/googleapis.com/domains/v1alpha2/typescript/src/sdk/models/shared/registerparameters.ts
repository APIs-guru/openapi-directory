import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Money } from "./money";

export enum RegisterParametersAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED"
,    Available = "AVAILABLE"
,    Unavailable = "UNAVAILABLE"
,    Unsupported = "UNSUPPORTED"
,    Unknown = "UNKNOWN"
}

export enum RegisterParametersDomainNoticesEnum {
    DomainNoticeUnspecified = "DOMAIN_NOTICE_UNSPECIFIED"
,    HstsPreloaded = "HSTS_PRELOADED"
}

export enum RegisterParametersSupportedPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED"
,    PublicContactData = "PUBLIC_CONTACT_DATA"
,    PrivateContactData = "PRIVATE_CONTACT_DATA"
,    RedactedContactData = "REDACTED_CONTACT_DATA"
}


// RegisterParameters
/** 
 * Parameters required to register a new domain.
**/
export class RegisterParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=availability" })
  availability?: RegisterParametersAvailabilityEnum;

  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=domainNotices" })
  domainNotices?: RegisterParametersDomainNoticesEnum[];

  @Metadata({ data: "json, name=supportedPrivacy" })
  supportedPrivacy?: RegisterParametersSupportedPrivacyEnum[];

  @Metadata({ data: "json, name=yearlyPrice" })
  yearlyPrice?: Money;
}
