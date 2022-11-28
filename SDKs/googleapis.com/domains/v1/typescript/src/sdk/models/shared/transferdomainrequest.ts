import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthorizationCode } from "./authorizationcode";
import { RegistrationInput } from "./registration";
import { Money } from "./money";


export enum TransferDomainRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED",
    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}


// TransferDomainRequestInput
/** 
 * Request for the `TransferDomain` method.
**/
export class TransferDomainRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationCode" })
  authorizationCode?: AuthorizationCode;

  @SpeakeasyMetadata({ data: "json, name=contactNotices" })
  contactNotices?: TransferDomainRequestContactNoticesEnum[];

  @SpeakeasyMetadata({ data: "json, name=registration" })
  registration?: RegistrationInput;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=yearlyPrice" })
  yearlyPrice?: Money;
}
