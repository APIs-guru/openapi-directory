package shared

type P2PNetworkProductOfferingPartialProviderVlansEnum string

const (
	P2PNetworkProductOfferingPartialProviderVlansEnumSingle P2PNetworkProductOfferingPartialProviderVlansEnum = "single"
	P2PNetworkProductOfferingPartialProviderVlansEnumMulti  P2PNetworkProductOfferingPartialProviderVlansEnum = "multi"
)

type P2PNetworkProductOfferingPartialResourceTypeEnum string

const (
	P2PNetworkProductOfferingPartialResourceTypeEnumConnection           P2PNetworkProductOfferingPartialResourceTypeEnum = "connection"
	P2PNetworkProductOfferingPartialResourceTypeEnumDemarc               P2PNetworkProductOfferingPartialResourceTypeEnum = "demarc"
	P2PNetworkProductOfferingPartialResourceTypeEnumNetworkService       P2PNetworkProductOfferingPartialResourceTypeEnum = "network_service"
	P2PNetworkProductOfferingPartialResourceTypeEnumNetworkServiceConfig P2PNetworkProductOfferingPartialResourceTypeEnum = "network_service_config"
)

type P2PNetworkProductOfferingPartial struct {
	BandwidthMax             *int64                                             `json:"bandwidth_max"`
	BandwidthMin             *int64                                             `json:"bandwidth_min"`
	DisplayName              *string                                            `json:"display_name"`
	DowngradeAllowed         *bool                                              `json:"downgrade_allowed"`
	HandoverMetroArea        *string                                            `json:"handover_metro_area"`
	HandoverMetroAreaNetwork *string                                            `json:"handover_metro_area_network"`
	ID                       *string                                            `json:"id"`
	Name                     *string                                            `json:"name"`
	PhysicalPortSpeed        *int64                                             `json:"physical_port_speed"`
	ProviderVlans            *P2PNetworkProductOfferingPartialProviderVlansEnum `json:"provider_vlans"`
	ResourceType             *P2PNetworkProductOfferingPartialResourceTypeEnum  `json:"resource_type"`
	ServiceMetroArea         *string                                            `json:"service_metro_area"`
	ServiceMetroAreaNetwork  *string                                            `json:"service_metro_area_network"`
	ServiceProvider          *string                                            `json:"service_provider"`
	Type                     string                                             `json:"type"`
	UpgradeAllowed           *bool                                              `json:"upgrade_allowed"`
}
