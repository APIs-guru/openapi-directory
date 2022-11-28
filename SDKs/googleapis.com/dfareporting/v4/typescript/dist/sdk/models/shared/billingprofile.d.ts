import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BillingProfileInvoiceLevelEnum {
    AccountLevel = "ACCOUNT_LEVEL",
    AdvertiserLevel = "ADVERTISER_LEVEL",
    CampaignLevel = "CAMPAIGN_LEVEL"
}
export declare enum BillingProfileStatusEnum {
    UnderReview = "UNDER_REVIEW",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
/**
 * Contains properties of a Campaign Manager Billing Profile.
**/
export declare class BillingProfile extends SpeakeasyBase {
    consolidatedInvoice?: boolean;
    countryCode?: string;
    currencyCode?: string;
    id?: string;
    invoiceLevel?: BillingProfileInvoiceLevelEnum;
    isDefault?: boolean;
    kind?: string;
    name?: string;
    paymentsAccountId?: string;
    paymentsCustomerId?: string;
    purchaseOrder?: string;
    secondaryPaymentsCustomerId?: string;
    status?: BillingProfileStatusEnum;
}
