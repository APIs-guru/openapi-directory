import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PublicUpdateSubscriptionStatusRequestLegalBasisEnum {
    LegitimateInterestPql = "LEGITIMATE_INTEREST_PQL"
,    LegitimateInterestClient = "LEGITIMATE_INTEREST_CLIENT"
,    PerformanceOfContract = "PERFORMANCE_OF_CONTRACT"
,    ConsentWithNotice = "CONSENT_WITH_NOTICE"
,    NonGdpr = "NON_GDPR"
,    ProcessAndStore = "PROCESS_AND_STORE"
,    LegitimateInterestOther = "LEGITIMATE_INTEREST_OTHER"
}


// PublicUpdateSubscriptionStatusRequest
/** 
 * A request to change the status of a contact's subscription.
**/
export class PublicUpdateSubscriptionStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=emailAddress" })
  emailAddress: string;

  @Metadata({ data: "json, name=legalBasis" })
  legalBasis?: PublicUpdateSubscriptionStatusRequestLegalBasisEnum;

  @Metadata({ data: "json, name=legalBasisExplanation" })
  legalBasisExplanation?: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId: string;
}
