package shared

type CloudNetworkProductOfferingPartialDeliveryMethodEnum string

const (
	CloudNetworkProductOfferingPartialDeliveryMethodEnumDedicated CloudNetworkProductOfferingPartialDeliveryMethodEnum = "dedicated"
	CloudNetworkProductOfferingPartialDeliveryMethodEnumShared    CloudNetworkProductOfferingPartialDeliveryMethodEnum = "shared"
)

type CloudNetworkProductOfferingPartialProviderVlansEnum string

const (
	CloudNetworkProductOfferingPartialProviderVlansEnumSingle CloudNetworkProductOfferingPartialProviderVlansEnum = "single"
	CloudNetworkProductOfferingPartialProviderVlansEnumMulti  CloudNetworkProductOfferingPartialProviderVlansEnum = "multi"
)

type CloudNetworkProductOfferingPartialResourceTypeEnum string

const (
	CloudNetworkProductOfferingPartialResourceTypeEnumConnection           CloudNetworkProductOfferingPartialResourceTypeEnum = "connection"
	CloudNetworkProductOfferingPartialResourceTypeEnumDemarc               CloudNetworkProductOfferingPartialResourceTypeEnum = "demarc"
	CloudNetworkProductOfferingPartialResourceTypeEnumNetworkService       CloudNetworkProductOfferingPartialResourceTypeEnum = "network_service"
	CloudNetworkProductOfferingPartialResourceTypeEnumNetworkServiceConfig CloudNetworkProductOfferingPartialResourceTypeEnum = "network_service_config"
)

type CloudNetworkProductOfferingPartialServiceProviderWorkflowEnum string

const (
	CloudNetworkProductOfferingPartialServiceProviderWorkflowEnumExchangeFirst CloudNetworkProductOfferingPartialServiceProviderWorkflowEnum = "exchange_first"
	CloudNetworkProductOfferingPartialServiceProviderWorkflowEnumProviderFirst CloudNetworkProductOfferingPartialServiceProviderWorkflowEnum = "provider_first"
)

type CloudNetworkProductOfferingPartial struct {
	BandwidthMax             *int64                                                         `json:"bandwidth_max,omitempty"`
	BandwidthMin             *int64                                                         `json:"bandwidth_min,omitempty"`
	DeliveryMethod           *CloudNetworkProductOfferingPartialDeliveryMethodEnum          `json:"delivery_method,omitempty"`
	DisplayName              *string                                                        `json:"display_name,omitempty"`
	Diversity                *int64                                                         `json:"diversity,omitempty"`
	DowngradeAllowed         *bool                                                          `json:"downgrade_allowed,omitempty"`
	HandoverMetroArea        *string                                                        `json:"handover_metro_area,omitempty"`
	HandoverMetroAreaNetwork *string                                                        `json:"handover_metro_area_network,omitempty"`
	ID                       *string                                                        `json:"id,omitempty"`
	Name                     *string                                                        `json:"name,omitempty"`
	PhysicalPortSpeed        *int64                                                         `json:"physical_port_speed,omitempty"`
	ProviderVlans            *CloudNetworkProductOfferingPartialProviderVlansEnum           `json:"provider_vlans,omitempty"`
	ResourceType             *CloudNetworkProductOfferingPartialResourceTypeEnum            `json:"resource_type,omitempty"`
	ServiceMetroArea         *string                                                        `json:"service_metro_area,omitempty"`
	ServiceMetroAreaNetwork  *string                                                        `json:"service_metro_area_network,omitempty"`
	ServiceProvider          *string                                                        `json:"service_provider,omitempty"`
	ServiceProviderPop       *string                                                        `json:"service_provider_pop,omitempty"`
	ServiceProviderRegion    *string                                                        `json:"service_provider_region,omitempty"`
	ServiceProviderWorkflow  *CloudNetworkProductOfferingPartialServiceProviderWorkflowEnum `json:"service_provider_workflow,omitempty"`
	Type                     string                                                         `json:"type"`
	UpgradeAllowed           *bool                                                          `json:"upgrade_allowed,omitempty"`
}
