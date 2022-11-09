import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PublicSubscriptionStatusLegalBasisEnum {
    LegitimateInterestPql = "LEGITIMATE_INTEREST_PQL"
,    LegitimateInterestClient = "LEGITIMATE_INTEREST_CLIENT"
,    PerformanceOfContract = "PERFORMANCE_OF_CONTRACT"
,    ConsentWithNotice = "CONSENT_WITH_NOTICE"
,    NonGdpr = "NON_GDPR"
,    ProcessAndStore = "PROCESS_AND_STORE"
,    LegitimateInterestOther = "LEGITIMATE_INTEREST_OTHER"
}

export enum PublicSubscriptionStatusSourceOfStatusEnum {
    PortalWideStatus = "PORTAL_WIDE_STATUS"
,    BrandWideStatus = "BRAND_WIDE_STATUS"
,    SubscriptionStatus = "SUBSCRIPTION_STATUS"
}

export enum PublicSubscriptionStatusStatusEnum {
    Subscribed = "SUBSCRIBED"
,    NotSubscribed = "NOT_SUBSCRIBED"
}


// PublicSubscriptionStatus
/** 
 * The status of a subscription for a contact.
**/
export class PublicSubscriptionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=brandId" })
  brandId?: number;

  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=legalBasis" })
  legalBasis?: PublicSubscriptionStatusLegalBasisEnum;

  @Metadata({ data: "json, name=legalBasisExplanation" })
  legalBasisExplanation?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=preferenceGroupName" })
  preferenceGroupName?: string;

  @Metadata({ data: "json, name=sourceOfStatus" })
  sourceOfStatus: PublicSubscriptionStatusSourceOfStatusEnum;

  @Metadata({ data: "json, name=status" })
  status: PublicSubscriptionStatusStatusEnum;
}
