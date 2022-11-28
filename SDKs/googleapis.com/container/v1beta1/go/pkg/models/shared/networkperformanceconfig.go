package shared

type NetworkPerformanceConfigExternalIPEgressBandwidthTierEnum string

const (
	NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTierUnspecified NetworkPerformanceConfigExternalIPEgressBandwidthTierEnum = "TIER_UNSPECIFIED"
	NetworkPerformanceConfigExternalIPEgressBandwidthTierEnumTier1           NetworkPerformanceConfigExternalIPEgressBandwidthTierEnum = "TIER_1"
)

type NetworkPerformanceConfigTotalEgressBandwidthTierEnum string

const (
	NetworkPerformanceConfigTotalEgressBandwidthTierEnumTierUnspecified NetworkPerformanceConfigTotalEgressBandwidthTierEnum = "TIER_UNSPECIFIED"
	NetworkPerformanceConfigTotalEgressBandwidthTierEnumTier1           NetworkPerformanceConfigTotalEgressBandwidthTierEnum = "TIER_1"
)

// NetworkPerformanceConfig
// Configuration of all network bandwidth tiers
type NetworkPerformanceConfig struct {
	ExternalIPEgressBandwidthTier *NetworkPerformanceConfigExternalIPEgressBandwidthTierEnum `json:"externalIpEgressBandwidthTier,omitempty"`
	TotalEgressBandwidthTier      *NetworkPerformanceConfigTotalEgressBandwidthTierEnum      `json:"totalEgressBandwidthTier,omitempty"`
}
