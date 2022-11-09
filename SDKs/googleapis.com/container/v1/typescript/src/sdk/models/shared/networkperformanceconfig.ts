import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NetworkPerformanceConfigTotalEgressBandwidthTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED"
,    Tier1 = "TIER_1"
}


// NetworkPerformanceConfig
/** 
 * Configuration of all network bandwidth tiers
**/
export class NetworkPerformanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=totalEgressBandwidthTier" })
  totalEgressBandwidthTier?: NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
}
