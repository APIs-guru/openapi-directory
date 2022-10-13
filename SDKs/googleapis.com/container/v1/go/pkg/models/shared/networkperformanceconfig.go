package shared

type NetworkPerformanceConfigTotalEgressBandwidthTierEnum string

const (
	NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified NetworkPerformanceConfigTotalEgressBandwidthTierEnum = "TIER_UNSPECIFIED"
	NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1           NetworkPerformanceConfigTotalEgressBandwidthTierEnum = "TIER_1"
)

type NetworkPerformanceConfig struct {
	TotalEgressBandwidthTier *NetworkPerformanceConfigTotalEgressBandwidthTierEnum `json:"totalEgressBandwidthTier"`
}
