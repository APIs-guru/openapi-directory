import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthorizationCode } from "./authorizationcode";
import { Registration } from "./registration";
import { Money } from "./money";

export enum TransferDomainRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED"
,    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}


// TransferDomainRequest
/** 
 * Request for the `TransferDomain` method.
**/
export class TransferDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationCode" })
  authorizationCode?: AuthorizationCode;

  @Metadata({ data: "json, name=contactNotices" })
  contactNotices?: TransferDomainRequestContactNoticesEnum[];

  @Metadata({ data: "json, name=registration" })
  registration?: Registration;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;

  @Metadata({ data: "json, name=yearlyPrice" })
  yearlyPrice?: Money;
}
