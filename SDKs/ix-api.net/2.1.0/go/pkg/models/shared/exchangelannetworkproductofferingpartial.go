package shared

type ExchangeLanNetworkProductOfferingPartialProviderVlansEnum string

const (
	ExchangeLanNetworkProductOfferingPartialProviderVlansEnumSingle ExchangeLanNetworkProductOfferingPartialProviderVlansEnum = "single"
	ExchangeLanNetworkProductOfferingPartialProviderVlansEnumMulti  ExchangeLanNetworkProductOfferingPartialProviderVlansEnum = "multi"
)

type ExchangeLanNetworkProductOfferingPartialResourceTypeEnum string

const (
	ExchangeLanNetworkProductOfferingPartialResourceTypeEnumConnection           ExchangeLanNetworkProductOfferingPartialResourceTypeEnum = "connection"
	ExchangeLanNetworkProductOfferingPartialResourceTypeEnumDemarc               ExchangeLanNetworkProductOfferingPartialResourceTypeEnum = "demarc"
	ExchangeLanNetworkProductOfferingPartialResourceTypeEnumNetworkService       ExchangeLanNetworkProductOfferingPartialResourceTypeEnum = "network_service"
	ExchangeLanNetworkProductOfferingPartialResourceTypeEnumNetworkServiceConfig ExchangeLanNetworkProductOfferingPartialResourceTypeEnum = "network_service_config"
)

type ExchangeLanNetworkProductOfferingPartial struct {
	BandwidthMax              *int64                                                     `json:"bandwidth_max"`
	BandwidthMin              *int64                                                     `json:"bandwidth_min"`
	DisplayName               *string                                                    `json:"display_name"`
	DowngradeAllowed          *bool                                                      `json:"downgrade_allowed"`
	ExchangeLanNetworkService *string                                                    `json:"exchange_lan_network_service"`
	HandoverMetroArea         *string                                                    `json:"handover_metro_area"`
	HandoverMetroAreaNetwork  *string                                                    `json:"handover_metro_area_network"`
	ID                        *string                                                    `json:"id"`
	Name                      *string                                                    `json:"name"`
	PhysicalPortSpeed         *int64                                                     `json:"physical_port_speed"`
	ProviderVlans             *ExchangeLanNetworkProductOfferingPartialProviderVlansEnum `json:"provider_vlans"`
	ResourceType              *ExchangeLanNetworkProductOfferingPartialResourceTypeEnum  `json:"resource_type"`
	ServiceMetroArea          *string                                                    `json:"service_metro_area"`
	ServiceMetroAreaNetwork   *string                                                    `json:"service_metro_area_network"`
	ServiceProvider           *string                                                    `json:"service_provider"`
	Type                      string                                                     `json:"type"`
	UpgradeAllowed            *bool                                                      `json:"upgrade_allowed"`
}
