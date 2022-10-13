package shared

type P2MpNetworkProductOfferingProviderVlansEnum string

const (
	P2MpNetworkProductOfferingProviderVlansEnumSingle P2MpNetworkProductOfferingProviderVlansEnum = "single"
	P2MpNetworkProductOfferingProviderVlansEnumMulti  P2MpNetworkProductOfferingProviderVlansEnum = "multi"
)

type P2MpNetworkProductOfferingResourceTypeEnum string

const (
	P2MpNetworkProductOfferingResourceTypeEnumConnection           P2MpNetworkProductOfferingResourceTypeEnum = "connection"
	P2MpNetworkProductOfferingResourceTypeEnumDemarc               P2MpNetworkProductOfferingResourceTypeEnum = "demarc"
	P2MpNetworkProductOfferingResourceTypeEnumNetworkService       P2MpNetworkProductOfferingResourceTypeEnum = "network_service"
	P2MpNetworkProductOfferingResourceTypeEnumNetworkServiceConfig P2MpNetworkProductOfferingResourceTypeEnum = "network_service_config"
)

type P2MpNetworkProductOffering struct {
	BandwidthMax             int64                                       `json:"bandwidth_max"`
	BandwidthMin             int64                                       `json:"bandwidth_min"`
	DisplayName              string                                      `json:"display_name"`
	DowngradeAllowed         bool                                        `json:"downgrade_allowed"`
	HandoverMetroArea        string                                      `json:"handover_metro_area"`
	HandoverMetroAreaNetwork string                                      `json:"handover_metro_area_network"`
	ID                       string                                      `json:"id"`
	Name                     string                                      `json:"name"`
	PhysicalPortSpeed        int64                                       `json:"physical_port_speed"`
	ProviderVlans            P2MpNetworkProductOfferingProviderVlansEnum `json:"provider_vlans"`
	ResourceType             P2MpNetworkProductOfferingResourceTypeEnum  `json:"resource_type"`
	ServiceMetroArea         string                                      `json:"service_metro_area"`
	ServiceMetroAreaNetwork  string                                      `json:"service_metro_area_network"`
	ServiceProvider          string                                      `json:"service_provider"`
	Type                     string                                      `json:"type"`
	UpgradeAllowed           bool                                        `json:"upgrade_allowed"`
}
