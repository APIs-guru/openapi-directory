package shared

type NetworkPerformanceConfigTotalEgressBandwidthTierEnum string

const (
	NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified NetworkPerformanceConfigTotalEgressBandwidthTierEnum = "TIER_UNSPECIFIED"
	NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1           NetworkPerformanceConfigTotalEgressBandwidthTierEnum = "TIER_1"
)

// NetworkPerformanceConfig
// Configuration of all network bandwidth tiers
type NetworkPerformanceConfig struct {
	TotalEgressBandwidthTier *NetworkPerformanceConfigTotalEgressBandwidthTierEnum `json:"totalEgressBandwidthTier,omitempty"`
}
