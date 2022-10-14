package shared

type P2MpNetworkProductOfferingPartialProviderVlansEnum string

const (
	P2MpNetworkProductOfferingPartialProviderVlansEnumSingle P2MpNetworkProductOfferingPartialProviderVlansEnum = "single"
	P2MpNetworkProductOfferingPartialProviderVlansEnumMulti  P2MpNetworkProductOfferingPartialProviderVlansEnum = "multi"
)

type P2MpNetworkProductOfferingPartialResourceTypeEnum string

const (
	P2MpNetworkProductOfferingPartialResourceTypeEnumConnection           P2MpNetworkProductOfferingPartialResourceTypeEnum = "connection"
	P2MpNetworkProductOfferingPartialResourceTypeEnumDemarc               P2MpNetworkProductOfferingPartialResourceTypeEnum = "demarc"
	P2MpNetworkProductOfferingPartialResourceTypeEnumNetworkService       P2MpNetworkProductOfferingPartialResourceTypeEnum = "network_service"
	P2MpNetworkProductOfferingPartialResourceTypeEnumNetworkServiceConfig P2MpNetworkProductOfferingPartialResourceTypeEnum = "network_service_config"
)

type P2MpNetworkProductOfferingPartial struct {
	BandwidthMax             *int64                                              `json:"bandwidth_max,omitempty"`
	BandwidthMin             *int64                                              `json:"bandwidth_min,omitempty"`
	DisplayName              *string                                             `json:"display_name,omitempty"`
	DowngradeAllowed         *bool                                               `json:"downgrade_allowed,omitempty"`
	HandoverMetroArea        *string                                             `json:"handover_metro_area,omitempty"`
	HandoverMetroAreaNetwork *string                                             `json:"handover_metro_area_network,omitempty"`
	ID                       *string                                             `json:"id,omitempty"`
	Name                     *string                                             `json:"name,omitempty"`
	PhysicalPortSpeed        *int64                                              `json:"physical_port_speed,omitempty"`
	ProviderVlans            *P2MpNetworkProductOfferingPartialProviderVlansEnum `json:"provider_vlans,omitempty"`
	ResourceType             *P2MpNetworkProductOfferingPartialResourceTypeEnum  `json:"resource_type,omitempty"`
	ServiceMetroArea         *string                                             `json:"service_metro_area,omitempty"`
	ServiceMetroAreaNetwork  *string                                             `json:"service_metro_area_network,omitempty"`
	ServiceProvider          *string                                             `json:"service_provider,omitempty"`
	Type                     string                                              `json:"type"`
	UpgradeAllowed           *bool                                               `json:"upgrade_allowed,omitempty"`
}
