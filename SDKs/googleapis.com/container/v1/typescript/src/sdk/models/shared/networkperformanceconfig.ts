import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NetworkPerformanceConfigTotalEgressBandwidthTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Tier1 = "TIER_1"
}


// NetworkPerformanceConfig
/** 
 * Configuration of all network bandwidth tiers
**/
export class NetworkPerformanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=totalEgressBandwidthTier" })
  totalEgressBandwidthTier?: NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
}
