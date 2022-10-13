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
	BandwidthMax             *int64                                                         `json:"bandwidth_max"`
	BandwidthMin             *int64                                                         `json:"bandwidth_min"`
	DeliveryMethod           *CloudNetworkProductOfferingPartialDeliveryMethodEnum          `json:"delivery_method"`
	DisplayName              *string                                                        `json:"display_name"`
	Diversity                *int64                                                         `json:"diversity"`
	DowngradeAllowed         *bool                                                          `json:"downgrade_allowed"`
	HandoverMetroArea        *string                                                        `json:"handover_metro_area"`
	HandoverMetroAreaNetwork *string                                                        `json:"handover_metro_area_network"`
	ID                       *string                                                        `json:"id"`
	Name                     *string                                                        `json:"name"`
	PhysicalPortSpeed        *int64                                                         `json:"physical_port_speed"`
	ProviderVlans            *CloudNetworkProductOfferingPartialProviderVlansEnum           `json:"provider_vlans"`
	ResourceType             *CloudNetworkProductOfferingPartialResourceTypeEnum            `json:"resource_type"`
	ServiceMetroArea         *string                                                        `json:"service_metro_area"`
	ServiceMetroAreaNetwork  *string                                                        `json:"service_metro_area_network"`
	ServiceProvider          *string                                                        `json:"service_provider"`
	ServiceProviderPop       *string                                                        `json:"service_provider_pop"`
	ServiceProviderRegion    *string                                                        `json:"service_provider_region"`
	ServiceProviderWorkflow  *CloudNetworkProductOfferingPartialServiceProviderWorkflowEnum `json:"service_provider_workflow"`
	Type                     string                                                         `json:"type"`
	UpgradeAllowed           *bool                                                          `json:"upgrade_allowed"`
}
