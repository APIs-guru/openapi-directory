package shared

type CloudNetworkProductOfferingDeliveryMethodEnum string

const (
	CloudNetworkProductOfferingDeliveryMethodEnumDedicated CloudNetworkProductOfferingDeliveryMethodEnum = "dedicated"
	CloudNetworkProductOfferingDeliveryMethodEnumShared    CloudNetworkProductOfferingDeliveryMethodEnum = "shared"
)

type CloudNetworkProductOfferingProviderVlansEnum string

const (
	CloudNetworkProductOfferingProviderVlansEnumSingle CloudNetworkProductOfferingProviderVlansEnum = "single"
	CloudNetworkProductOfferingProviderVlansEnumMulti  CloudNetworkProductOfferingProviderVlansEnum = "multi"
)

type CloudNetworkProductOfferingResourceTypeEnum string

const (
	CloudNetworkProductOfferingResourceTypeEnumConnection           CloudNetworkProductOfferingResourceTypeEnum = "connection"
	CloudNetworkProductOfferingResourceTypeEnumDemarc               CloudNetworkProductOfferingResourceTypeEnum = "demarc"
	CloudNetworkProductOfferingResourceTypeEnumNetworkService       CloudNetworkProductOfferingResourceTypeEnum = "network_service"
	CloudNetworkProductOfferingResourceTypeEnumNetworkServiceConfig CloudNetworkProductOfferingResourceTypeEnum = "network_service_config"
)

type CloudNetworkProductOfferingServiceProviderWorkflowEnum string

const (
	CloudNetworkProductOfferingServiceProviderWorkflowEnumExchangeFirst CloudNetworkProductOfferingServiceProviderWorkflowEnum = "exchange_first"
	CloudNetworkProductOfferingServiceProviderWorkflowEnumProviderFirst CloudNetworkProductOfferingServiceProviderWorkflowEnum = "provider_first"
)

type CloudNetworkProductOffering struct {
	BandwidthMax             int64                                                  `json:"bandwidth_max"`
	BandwidthMin             int64                                                  `json:"bandwidth_min"`
	DeliveryMethod           CloudNetworkProductOfferingDeliveryMethodEnum          `json:"delivery_method"`
	DisplayName              string                                                 `json:"display_name"`
	Diversity                int64                                                  `json:"diversity"`
	DowngradeAllowed         bool                                                   `json:"downgrade_allowed"`
	HandoverMetroArea        string                                                 `json:"handover_metro_area"`
	HandoverMetroAreaNetwork string                                                 `json:"handover_metro_area_network"`
	ID                       string                                                 `json:"id"`
	Name                     string                                                 `json:"name"`
	PhysicalPortSpeed        int64                                                  `json:"physical_port_speed"`
	ProviderVlans            CloudNetworkProductOfferingProviderVlansEnum           `json:"provider_vlans"`
	ResourceType             CloudNetworkProductOfferingResourceTypeEnum            `json:"resource_type"`
	ServiceMetroArea         string                                                 `json:"service_metro_area"`
	ServiceMetroAreaNetwork  string                                                 `json:"service_metro_area_network"`
	ServiceProvider          string                                                 `json:"service_provider"`
	ServiceProviderPop       string                                                 `json:"service_provider_pop"`
	ServiceProviderRegion    string                                                 `json:"service_provider_region"`
	ServiceProviderWorkflow  CloudNetworkProductOfferingServiceProviderWorkflowEnum `json:"service_provider_workflow"`
	Type                     string                                                 `json:"type"`
	UpgradeAllowed           bool                                                   `json:"upgrade_allowed"`
}
