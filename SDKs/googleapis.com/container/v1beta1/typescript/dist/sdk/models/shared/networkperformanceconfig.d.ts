import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Tier1 = "TIER_1"
}
export declare enum NetworkPerformanceConfigTotalEgressBandwidthTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Tier1 = "TIER_1"
}
/**
 * Configuration of all network bandwidth tiers
**/
export declare class NetworkPerformanceConfig extends SpeakeasyBase {
    externalIpEgressBandwidthTier?: NetworkPerformanceConfigExternalIpEgressBandwidthTierEnum;
    totalEgressBandwidthTier?: NetworkPerformanceConfigTotalEgressBandwidthTierEnum;
}
