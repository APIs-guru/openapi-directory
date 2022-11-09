import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PublicUpdateSubscriptionStatusRequestLegalBasisEnum {
    LegitimateInterestPql = "LEGITIMATE_INTEREST_PQL",
    LegitimateInterestClient = "LEGITIMATE_INTEREST_CLIENT",
    PerformanceOfContract = "PERFORMANCE_OF_CONTRACT",
    ConsentWithNotice = "CONSENT_WITH_NOTICE",
    NonGdpr = "NON_GDPR",
    ProcessAndStore = "PROCESS_AND_STORE",
    LegitimateInterestOther = "LEGITIMATE_INTEREST_OTHER"
}
/**
 * A request to change the status of a contact's subscription.
**/
export declare class PublicUpdateSubscriptionStatusRequest extends SpeakeasyBase {
    emailAddress: string;
    legalBasis?: PublicUpdateSubscriptionStatusRequestLegalBasisEnum;
    legalBasisExplanation?: string;
    subscriptionId: string;
}
