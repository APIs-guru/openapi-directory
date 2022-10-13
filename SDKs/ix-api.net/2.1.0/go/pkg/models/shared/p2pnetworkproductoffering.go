package shared

type P2PNetworkProductOfferingProviderVlansEnum string

const (
	P2PNetworkProductOfferingProviderVlansEnumSingle P2PNetworkProductOfferingProviderVlansEnum = "single"
	P2PNetworkProductOfferingProviderVlansEnumMulti  P2PNetworkProductOfferingProviderVlansEnum = "multi"
)

type P2PNetworkProductOfferingResourceTypeEnum string

const (
	P2PNetworkProductOfferingResourceTypeEnumConnection           P2PNetworkProductOfferingResourceTypeEnum = "connection"
	P2PNetworkProductOfferingResourceTypeEnumDemarc               P2PNetworkProductOfferingResourceTypeEnum = "demarc"
	P2PNetworkProductOfferingResourceTypeEnumNetworkService       P2PNetworkProductOfferingResourceTypeEnum = "network_service"
	P2PNetworkProductOfferingResourceTypeEnumNetworkServiceConfig P2PNetworkProductOfferingResourceTypeEnum = "network_service_config"
)

type P2PNetworkProductOffering struct {
	BandwidthMax             int64                                      `json:"bandwidth_max"`
	BandwidthMin             int64                                      `json:"bandwidth_min"`
	DisplayName              string                                     `json:"display_name"`
	DowngradeAllowed         bool                                       `json:"downgrade_allowed"`
	HandoverMetroArea        string                                     `json:"handover_metro_area"`
	HandoverMetroAreaNetwork string                                     `json:"handover_metro_area_network"`
	ID                       string                                     `json:"id"`
	Name                     string                                     `json:"name"`
	PhysicalPortSpeed        int64                                      `json:"physical_port_speed"`
	ProviderVlans            P2PNetworkProductOfferingProviderVlansEnum `json:"provider_vlans"`
	ResourceType             P2PNetworkProductOfferingResourceTypeEnum  `json:"resource_type"`
	ServiceMetroArea         string                                     `json:"service_metro_area"`
	ServiceMetroAreaNetwork  string                                     `json:"service_metro_area_network"`
	ServiceProvider          string                                     `json:"service_provider"`
	Type                     string                                     `json:"type"`
	UpgradeAllowed           bool                                       `json:"upgrade_allowed"`
}
