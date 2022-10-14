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
	BandwidthMax             *int64                                             `json:"bandwidth_max,omitempty"`
	BandwidthMin             *int64                                             `json:"bandwidth_min,omitempty"`
	DisplayName              *string                                            `json:"display_name,omitempty"`
	DowngradeAllowed         *bool                                              `json:"downgrade_allowed,omitempty"`
	HandoverMetroArea        *string                                            `json:"handover_metro_area,omitempty"`
	HandoverMetroAreaNetwork *string                                            `json:"handover_metro_area_network,omitempty"`
	ID                       *string                                            `json:"id,omitempty"`
	Name                     *string                                            `json:"name,omitempty"`
	PhysicalPortSpeed        *int64                                             `json:"physical_port_speed,omitempty"`
	ProviderVlans            *P2PNetworkProductOfferingPartialProviderVlansEnum `json:"provider_vlans,omitempty"`
	ResourceType             *P2PNetworkProductOfferingPartialResourceTypeEnum  `json:"resource_type,omitempty"`
	ServiceMetroArea         *string                                            `json:"service_metro_area,omitempty"`
	ServiceMetroAreaNetwork  *string                                            `json:"service_metro_area_network,omitempty"`
	ServiceProvider          *string                                            `json:"service_provider,omitempty"`
	Type                     string                                             `json:"type"`
	UpgradeAllowed           *bool                                              `json:"upgrade_allowed,omitempty"`
}
