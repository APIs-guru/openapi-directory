import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BillingProfileInvoiceLevelEnum {
    AccountLevel = "ACCOUNT_LEVEL",
    AdvertiserLevel = "ADVERTISER_LEVEL",
    CampaignLevel = "CAMPAIGN_LEVEL"
}

export enum BillingProfileStatusEnum {
    UnderReview = "UNDER_REVIEW",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}


// BillingProfile
/** 
 * Contains properties of a Campaign Manager Billing Profile.
**/
export class BillingProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consolidatedInvoice" })
  consolidatedInvoice?: boolean;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=currencyCode" })
  currencyCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceLevel" })
  invoiceLevel?: BillingProfileInvoiceLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentsAccountId" })
  paymentsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentsCustomerId" })
  paymentsCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=purchaseOrder" })
  purchaseOrder?: string;

  @SpeakeasyMetadata({ data: "json, name=secondaryPaymentsCustomerId" })
  secondaryPaymentsCustomerId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: BillingProfileStatusEnum;
}
