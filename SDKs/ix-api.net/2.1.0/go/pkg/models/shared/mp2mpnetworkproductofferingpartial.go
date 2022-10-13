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
	BandwidthMax             *int64                                               `json:"bandwidth_max"`
	BandwidthMin             *int64                                               `json:"bandwidth_min"`
	DisplayName              *string                                              `json:"display_name"`
	DowngradeAllowed         *bool                                                `json:"downgrade_allowed"`
	HandoverMetroArea        *string                                              `json:"handover_metro_area"`
	HandoverMetroAreaNetwork *string                                              `json:"handover_metro_area_network"`
	ID                       *string                                              `json:"id"`
	Name                     *string                                              `json:"name"`
	PhysicalPortSpeed        *int64                                               `json:"physical_port_speed"`
	ProviderVlans            *Mp2MpNetworkProductOfferingPartialProviderVlansEnum `json:"provider_vlans"`
	ResourceType             *Mp2MpNetworkProductOfferingPartialResourceTypeEnum  `json:"resource_type"`
	ServiceMetroArea         *string                                              `json:"service_metro_area"`
	ServiceMetroAreaNetwork  *string                                              `json:"service_metro_area_network"`
	ServiceProvider          *string                                              `json:"service_provider"`
	Type                     string                                               `json:"type"`
	UpgradeAllowed           *bool                                                `json:"upgrade_allowed"`
}
