import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum RegisterParametersAvailabilityEnum {
    AvailabilityUnspecified = "AVAILABILITY_UNSPECIFIED",
    Available = "AVAILABLE",
    Unavailable = "UNAVAILABLE",
    Unsupported = "UNSUPPORTED",
    Unknown = "UNKNOWN"
}
export declare enum RegisterParametersDomainNoticesEnum {
    DomainNoticeUnspecified = "DOMAIN_NOTICE_UNSPECIFIED",
    HstsPreloaded = "HSTS_PRELOADED"
}
export declare enum RegisterParametersSupportedPrivacyEnum {
    ContactPrivacyUnspecified = "CONTACT_PRIVACY_UNSPECIFIED",
    PublicContactData = "PUBLIC_CONTACT_DATA",
    PrivateContactData = "PRIVATE_CONTACT_DATA",
    RedactedContactData = "REDACTED_CONTACT_DATA"
}
/**
 * Parameters required to register a new domain.
**/
export declare class RegisterParameters extends SpeakeasyBase {
    availability?: RegisterParametersAvailabilityEnum;
    domainName?: string;
    domainNotices?: RegisterParametersDomainNoticesEnum[];
    supportedPrivacy?: RegisterParametersSupportedPrivacyEnum[];
    yearlyPrice?: Money;
}
