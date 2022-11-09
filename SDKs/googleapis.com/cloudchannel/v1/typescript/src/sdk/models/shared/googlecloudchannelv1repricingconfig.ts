import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1RepricingAdjustment } from "./googlecloudchannelv1repricingadjustment";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleCloudChannelV1RepricingConfigEntitlementGranularity } from "./googlecloudchannelv1repricingconfigentitlementgranularity";

export enum GoogleCloudChannelV1RepricingConfigRebillingBasisEnum {
    RebillingBasisUnspecified = "REBILLING_BASIS_UNSPECIFIED"
,    CostAtList = "COST_AT_LIST"
,    DirectCustomerCost = "DIRECT_CUSTOMER_COST"
}


// GoogleCloudChannelV1RepricingConfig
/** 
 * Configuration for repricing a Google bill over a period of time.
**/
export class GoogleCloudChannelV1RepricingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustment" })
  adjustment?: GoogleCloudChannelV1RepricingAdjustment;

  @Metadata({ data: "json, name=channelPartnerGranularity" })
  channelPartnerGranularity?: Map<string, any>;

  @Metadata({ data: "json, name=effectiveInvoiceMonth" })
  effectiveInvoiceMonth?: GoogleTypeDate;

  @Metadata({ data: "json, name=entitlementGranularity" })
  entitlementGranularity?: GoogleCloudChannelV1RepricingConfigEntitlementGranularity;

  @Metadata({ data: "json, name=rebillingBasis" })
  rebillingBasis?: GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
}
