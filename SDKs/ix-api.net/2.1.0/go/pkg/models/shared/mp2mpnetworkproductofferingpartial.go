package shared

type Mp2MpNetworkProductOfferingPartialProviderVlansEnum string

const (
	Mp2MpNetworkProductOfferingPartialProviderVlansEnumSingle Mp2MpNetworkProductOfferingPartialProviderVlansEnum = "single"
	Mp2MpNetworkProductOfferingPartialProviderVlansEnumMulti  Mp2MpNetworkProductOfferingPartialProviderVlansEnum = "multi"
)

type Mp2MpNetworkProductOfferingPartialResourceTypeEnum string

const (
	Mp2MpNetworkProductOfferingPartialResourceTypeEnumConnection           Mp2MpNetworkProductOfferingPartialResourceTypeEnum = "connection"
	Mp2MpNetworkProductOfferingPartialResourceTypeEnumDemarc               Mp2MpNetworkProductOfferingPartialResourceTypeEnum = "demarc"
	Mp2MpNetworkProductOfferingPartialResourceTypeEnumNetworkService       Mp2MpNetworkProductOfferingPartialResourceTypeEnum = "network_service"
	Mp2MpNetworkProductOfferingPartialResourceTypeEnumNetworkServiceConfig Mp2MpNetworkProductOfferingPartialResourceTypeEnum = "network_service_config"
)

type Mp2MpNetworkProductOfferingPartial struct {
	BandwidthMax             *int64                                               `json:"bandwidth_max,omitempty"`
	BandwidthMin             *int64                                               `json:"bandwidth_min,omitempty"`
	DisplayName              *string                                              `json:"display_name,omitempty"`
	DowngradeAllowed         *bool                                                `json:"downgrade_allowed,omitempty"`
	HandoverMetroArea        *string                                              `json:"handover_metro_area,omitempty"`
	HandoverMetroAreaNetwork *string                                              `json:"handover_metro_area_network,omitempty"`
	ID                       *string                                              `json:"id,omitempty"`
	Name                     *string                                              `json:"name,omitempty"`
	PhysicalPortSpeed        *int64                                               `json:"physical_port_speed,omitempty"`
	ProviderVlans            *Mp2MpNetworkProductOfferingPartialProviderVlansEnum `json:"provider_vlans,omitempty"`
	ResourceType             *Mp2MpNetworkProductOfferingPartialResourceTypeEnum  `json:"resource_type,omitempty"`
	ServiceMetroArea         *string                                              `json:"service_metro_area,omitempty"`
	ServiceMetroAreaNetwork  *string                                              `json:"service_metro_area_network,omitempty"`
	ServiceProvider          *string                                              `json:"service_provider,omitempty"`
	Type                     string                                               `json:"type"`
	UpgradeAllowed           *bool                                                `json:"upgrade_allowed,omitempty"`
}
