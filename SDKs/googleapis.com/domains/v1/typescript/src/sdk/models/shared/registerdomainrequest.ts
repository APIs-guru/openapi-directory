import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegistrationInput } from "./registration";
import { Money } from "./money";


export enum RegisterDomainRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED",
    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}

export enum RegisterDomainRequestDomainNoticesEnum {
    DomainNoticeUnspecified = "DOMAIN_NOTICE_UNSPECIFIED",
    HstsPreloaded = "HSTS_PRELOADED"
}


// RegisterDomainRequestInput
/** 
 * Request for the `RegisterDomain` method.
**/
export class RegisterDomainRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactNotices" })
  contactNotices?: RegisterDomainRequestContactNoticesEnum[];

  @SpeakeasyMetadata({ data: "json, name=domainNotices" })
  domainNotices?: RegisterDomainRequestDomainNoticesEnum[];

  @SpeakeasyMetadata({ data: "json, name=registration" })
  registration?: RegistrationInput;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=yearlyPrice" })
  yearlyPrice?: Money;
}
