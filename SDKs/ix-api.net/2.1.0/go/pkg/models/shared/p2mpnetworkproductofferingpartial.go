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
	BandwidthMax             *int64                                              `json:"bandwidth_max"`
	BandwidthMin             *int64                                              `json:"bandwidth_min"`
	DisplayName              *string                                             `json:"display_name"`
	DowngradeAllowed         *bool                                               `json:"downgrade_allowed"`
	HandoverMetroArea        *string                                             `json:"handover_metro_area"`
	HandoverMetroAreaNetwork *string                                             `json:"handover_metro_area_network"`
	ID                       *string                                             `json:"id"`
	Name                     *string                                             `json:"name"`
	PhysicalPortSpeed        *int64                                              `json:"physical_port_speed"`
	ProviderVlans            *P2MpNetworkProductOfferingPartialProviderVlansEnum `json:"provider_vlans"`
	ResourceType             *P2MpNetworkProductOfferingPartialResourceTypeEnum  `json:"resource_type"`
	ServiceMetroArea         *string                                             `json:"service_metro_area"`
	ServiceMetroAreaNetwork  *string                                             `json:"service_metro_area_network"`
	ServiceProvider          *string                                             `json:"service_provider"`
	Type                     string                                              `json:"type"`
	UpgradeAllowed           *bool                                               `json:"upgrade_allowed"`
}
