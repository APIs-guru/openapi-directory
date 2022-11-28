import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RepricingAdjustment } from "./googlecloudchannelv1repricingadjustment";
import { GoogleTypeDate } from "./googletypedate";
import { GoogleCloudChannelV1RepricingConfigEntitlementGranularity } from "./googlecloudchannelv1repricingconfigentitlementgranularity";


export enum GoogleCloudChannelV1RepricingConfigRebillingBasisEnum {
    RebillingBasisUnspecified = "REBILLING_BASIS_UNSPECIFIED",
    CostAtList = "COST_AT_LIST",
    DirectCustomerCost = "DIRECT_CUSTOMER_COST"
}


// GoogleCloudChannelV1RepricingConfig
/** 
 * Configuration for repricing a Google bill over a period of time.
**/
export class GoogleCloudChannelV1RepricingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adjustment" })
  adjustment?: GoogleCloudChannelV1RepricingAdjustment;

  @SpeakeasyMetadata({ data: "json, name=channelPartnerGranularity" })
  channelPartnerGranularity?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=effectiveInvoiceMonth" })
  effectiveInvoiceMonth?: GoogleTypeDate;

  @SpeakeasyMetadata({ data: "json, name=entitlementGranularity" })
  entitlementGranularity?: GoogleCloudChannelV1RepricingConfigEntitlementGranularity;

  @SpeakeasyMetadata({ data: "json, name=rebillingBasis" })
  rebillingBasis?: GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
}
