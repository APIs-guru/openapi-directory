import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Registration } from "./registration";
import { Money } from "./money";

export enum RegisterDomainRequestContactNoticesEnum {
    ContactNoticeUnspecified = "CONTACT_NOTICE_UNSPECIFIED"
,    PublicContactDataAcknowledgement = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"
}

export enum RegisterDomainRequestDomainNoticesEnum {
    DomainNoticeUnspecified = "DOMAIN_NOTICE_UNSPECIFIED"
,    HstsPreloaded = "HSTS_PRELOADED"
}


// RegisterDomainRequest
/** 
 * Request for the `RegisterDomain` method.
**/
export class RegisterDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactNotices" })
  contactNotices?: RegisterDomainRequestContactNoticesEnum[];

  @Metadata({ data: "json, name=domainNotices" })
  domainNotices?: RegisterDomainRequestDomainNoticesEnum[];

  @Metadata({ data: "json, name=registration" })
  registration?: Registration;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;

  @Metadata({ data: "json, name=yearlyPrice" })
  yearlyPrice?: Money;
}
