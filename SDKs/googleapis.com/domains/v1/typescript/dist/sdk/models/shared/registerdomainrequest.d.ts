import { SpeakeasyBase } from "../../../internal/utils";
import { RegistrationInput } from "./registration";
import { Money } from "./money";
export declare enum RegisterDomainRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED",
    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}
export declare enum RegisterDomainRequestDomainNoticesEnum {
    DomainNoticeUnspecified = "DOMAIN_NOTICE_UNSPECIFIED",
    HstsPreloaded = "HSTS_PRELOADED"
}
/**
 * Request for the `RegisterDomain` method.
**/
export declare class RegisterDomainRequestInput extends SpeakeasyBase {
    contactNotices?: RegisterDomainRequestContactNoticesEnum[];
    domainNotices?: RegisterDomainRequestDomainNoticesEnum[];
    registration?: RegistrationInput;
    validateOnly?: boolean;
    yearlyPrice?: Money;
}
