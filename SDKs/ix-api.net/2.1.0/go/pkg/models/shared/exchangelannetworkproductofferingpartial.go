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
	BandwidthMax              *int64                                                     `json:"bandwidth_max,omitempty"`
	BandwidthMin              *int64                                                     `json:"bandwidth_min,omitempty"`
	DisplayName               *string                                                    `json:"display_name,omitempty"`
	DowngradeAllowed          *bool                                                      `json:"downgrade_allowed,omitempty"`
	ExchangeLanNetworkService *string                                                    `json:"exchange_lan_network_service,omitempty"`
	HandoverMetroArea         *string                                                    `json:"handover_metro_area,omitempty"`
	HandoverMetroAreaNetwork  *string                                                    `json:"handover_metro_area_network,omitempty"`
	ID                        *string                                                    `json:"id,omitempty"`
	Name                      *string                                                    `json:"name,omitempty"`
	PhysicalPortSpeed         *int64                                                     `json:"physical_port_speed,omitempty"`
	ProviderVlans             *ExchangeLanNetworkProductOfferingPartialProviderVlansEnum `json:"provider_vlans,omitempty"`
	ResourceType              *ExchangeLanNetworkProductOfferingPartialResourceTypeEnum  `json:"resource_type,omitempty"`
	ServiceMetroArea          *string                                                    `json:"service_metro_area,omitempty"`
	ServiceMetroAreaNetwork   *string                                                    `json:"service_metro_area_network,omitempty"`
	ServiceProvider           *string                                                    `json:"service_provider,omitempty"`
	Type                      string                                                     `json:"type"`
	UpgradeAllowed            *bool                                                      `json:"upgrade_allowed,omitempty"`
}
