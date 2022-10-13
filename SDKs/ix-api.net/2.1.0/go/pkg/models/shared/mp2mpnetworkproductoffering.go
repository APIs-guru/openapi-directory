package shared

type Mp2MpNetworkProductOfferingProviderVlansEnum string

const (
	Mp2MpNetworkProductOfferingProviderVlansEnumSingle Mp2MpNetworkProductOfferingProviderVlansEnum = "single"
	Mp2MpNetworkProductOfferingProviderVlansEnumMulti  Mp2MpNetworkProductOfferingProviderVlansEnum = "multi"
)

type Mp2MpNetworkProductOfferingResourceTypeEnum string

const (
	Mp2MpNetworkProductOfferingResourceTypeEnumConnection           Mp2MpNetworkProductOfferingResourceTypeEnum = "connection"
	Mp2MpNetworkProductOfferingResourceTypeEnumDemarc               Mp2MpNetworkProductOfferingResourceTypeEnum = "demarc"
	Mp2MpNetworkProductOfferingResourceTypeEnumNetworkService       Mp2MpNetworkProductOfferingResourceTypeEnum = "network_service"
	Mp2MpNetworkProductOfferingResourceTypeEnumNetworkServiceConfig Mp2MpNetworkProductOfferingResourceTypeEnum = "network_service_config"
)

type Mp2MpNetworkProductOffering struct {
	BandwidthMax             int64                                        `json:"bandwidth_max"`
	BandwidthMin             int64                                        `json:"bandwidth_min"`
	DisplayName              string                                       `json:"display_name"`
	DowngradeAllowed         bool                                         `json:"downgrade_allowed"`
	HandoverMetroArea        string                                       `json:"handover_metro_area"`
	HandoverMetroAreaNetwork string                                       `json:"handover_metro_area_network"`
	ID                       string                                       `json:"id"`
	Name                     string                                       `json:"name"`
	PhysicalPortSpeed        int64                                        `json:"physical_port_speed"`
	ProviderVlans            Mp2MpNetworkProductOfferingProviderVlansEnum `json:"provider_vlans"`
	ResourceType             Mp2MpNetworkProductOfferingResourceTypeEnum  `json:"resource_type"`
	ServiceMetroArea         string                                       `json:"service_metro_area"`
	ServiceMetroAreaNetwork  string                                       `json:"service_metro_area_network"`
	ServiceProvider          string                                       `json:"service_provider"`
	Type                     string                                       `json:"type"`
	UpgradeAllowed           bool                                         `json:"upgrade_allowed"`
}
