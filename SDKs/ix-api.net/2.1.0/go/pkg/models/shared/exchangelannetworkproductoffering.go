package shared

type ExchangeLanNetworkProductOfferingProviderVlansEnum string

const (
	ExchangeLanNetworkProductOfferingProviderVlansEnumSingle ExchangeLanNetworkProductOfferingProviderVlansEnum = "single"
	ExchangeLanNetworkProductOfferingProviderVlansEnumMulti  ExchangeLanNetworkProductOfferingProviderVlansEnum = "multi"
)

type ExchangeLanNetworkProductOfferingResourceTypeEnum string

const (
	ExchangeLanNetworkProductOfferingResourceTypeEnumConnection           ExchangeLanNetworkProductOfferingResourceTypeEnum = "connection"
	ExchangeLanNetworkProductOfferingResourceTypeEnumDemarc               ExchangeLanNetworkProductOfferingResourceTypeEnum = "demarc"
	ExchangeLanNetworkProductOfferingResourceTypeEnumNetworkService       ExchangeLanNetworkProductOfferingResourceTypeEnum = "network_service"
	ExchangeLanNetworkProductOfferingResourceTypeEnumNetworkServiceConfig ExchangeLanNetworkProductOfferingResourceTypeEnum = "network_service_config"
)

type ExchangeLanNetworkProductOffering struct {
	BandwidthMax              int64                                              `json:"bandwidth_max"`
	BandwidthMin              int64                                              `json:"bandwidth_min"`
	DisplayName               string                                             `json:"display_name"`
	DowngradeAllowed          bool                                               `json:"downgrade_allowed"`
	ExchangeLanNetworkService string                                             `json:"exchange_lan_network_service"`
	HandoverMetroArea         string                                             `json:"handover_metro_area"`
	HandoverMetroAreaNetwork  string                                             `json:"handover_metro_area_network"`
	ID                        string                                             `json:"id"`
	Name                      string                                             `json:"name"`
	PhysicalPortSpeed         int64                                              `json:"physical_port_speed"`
	ProviderVlans             ExchangeLanNetworkProductOfferingProviderVlansEnum `json:"provider_vlans"`
	ResourceType              ExchangeLanNetworkProductOfferingResourceTypeEnum  `json:"resource_type"`
	ServiceMetroArea          string                                             `json:"service_metro_area"`
	ServiceMetroAreaNetwork   string                                             `json:"service_metro_area_network"`
	ServiceProvider           string                                             `json:"service_provider"`
	Type                      string                                             `json:"type"`
	UpgradeAllowed            bool                                               `json:"upgrade_allowed"`
}
