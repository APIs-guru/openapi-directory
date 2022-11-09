import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BillingProfileInvoiceLevelEnum {
    AccountLevel = "ACCOUNT_LEVEL"
,    AdvertiserLevel = "ADVERTISER_LEVEL"
,    CampaignLevel = "CAMPAIGN_LEVEL"
}

export enum BillingProfileStatusEnum {
    UnderReview = "UNDER_REVIEW"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
}


// BillingProfile
/** 
 * Contains properties of a Campaign Manager Billing Profile.
**/
export class BillingProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=consolidatedInvoice" })
  consolidatedInvoice?: boolean;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=invoiceLevel" })
  invoiceLevel?: BillingProfileInvoiceLevelEnum;

  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=paymentsAccountId" })
  paymentsAccountId?: string;

  @Metadata({ data: "json, name=paymentsCustomerId" })
  paymentsCustomerId?: string;

  @Metadata({ data: "json, name=purchaseOrder" })
  purchaseOrder?: string;

  @Metadata({ data: "json, name=secondaryPaymentsCustomerId" })
  secondaryPaymentsCustomerId?: string;

  @Metadata({ data: "json, name=status" })
  status?: BillingProfileStatusEnum;
}
