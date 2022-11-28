import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCode } from "./authorizationcode";
import { RegistrationInput } from "./registration";
import { Money } from "./money";
export declare enum TransferDomainRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED",
    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}
/**
 * Request for the `TransferDomain` method.
**/
export declare class TransferDomainRequestInput extends SpeakeasyBase {
    authorizationCode?: AuthorizationCode;
    contactNotices?: TransferDomainRequestContactNoticesEnum[];
    registration?: RegistrationInput;
    validateOnly?: boolean;
    yearlyPrice?: Money;
}
