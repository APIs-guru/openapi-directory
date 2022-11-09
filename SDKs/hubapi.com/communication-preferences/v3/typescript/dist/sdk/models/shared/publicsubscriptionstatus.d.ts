import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PublicSubscriptionStatusLegalBasisEnum {
    LegitimateInterestPql = "LEGITIMATE_INTEREST_PQL",
    LegitimateInterestClient = "LEGITIMATE_INTEREST_CLIENT",
    PerformanceOfContract = "PERFORMANCE_OF_CONTRACT",
    ConsentWithNotice = "CONSENT_WITH_NOTICE",
    NonGdpr = "NON_GDPR",
    ProcessAndStore = "PROCESS_AND_STORE",
    LegitimateInterestOther = "LEGITIMATE_INTEREST_OTHER"
}
export declare enum PublicSubscriptionStatusSourceOfStatusEnum {
    PortalWideStatus = "PORTAL_WIDE_STATUS",
    BrandWideStatus = "BRAND_WIDE_STATUS",
    SubscriptionStatus = "SUBSCRIPTION_STATUS"
}
export declare enum PublicSubscriptionStatusStatusEnum {
    Subscribed = "SUBSCRIBED",
    NotSubscribed = "NOT_SUBSCRIBED"
}
/**
 * The status of a subscription for a contact.
**/
export declare class PublicSubscriptionStatus extends SpeakeasyBase {
    brandId?: number;
    description: string;
    id: string;
    legalBasis?: PublicSubscriptionStatusLegalBasisEnum;
    legalBasisExplanation?: string;
    name: string;
    preferenceGroupName?: string;
    sourceOfStatus: PublicSubscriptionStatusSourceOfStatusEnum;
    status: PublicSubscriptionStatusStatusEnum;
}
