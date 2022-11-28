import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingAdjustment } from "./googlecloudchannelv1repricingadjustment";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleCloudChannelV1RepricingConfigEntitlementGranularity } from "./googlecloudchannelv1repricingconfigentitlementgranularity";
export declare enum GoogleCloudChannelV1RepricingConfigRebillingBasisEnum {
    RebillingBasisUnspecified = "REBILLING_BASIS_UNSPECIFIED",
    CostAtList = "COST_AT_LIST",
    DirectCustomerCost = "DIRECT_CUSTOMER_COST"
}
/**
 * Configuration for repricing a Google bill over a period of time.
**/
export declare class GoogleCloudChannelV1RepricingConfig extends SpeakeasyBase {
    adjustment?: GoogleCloudChannelV1RepricingAdjustment;
    channelPartnerGranularity?: Map<string, any>;
    effectiveInvoiceMonth?: GoogleTypeDate;
    entitlementGranularity?: GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
    rebillingBasis?: GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
}
