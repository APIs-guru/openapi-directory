package shared



type ConsumerConfig struct {
    CloudsqlConfigs []CloudSQLConfig `json:"cloudsqlConfigs,omitempty"`
    ConsumerExportCustomRoutes *bool `json:"consumerExportCustomRoutes,omitempty"`
    ConsumerExportSubnetRoutesWithPublicIP *bool `json:"consumerExportSubnetRoutesWithPublicIp,omitempty"`
    ConsumerImportCustomRoutes *bool `json:"consumerImportCustomRoutes,omitempty"`
    ConsumerImportSubnetRoutesWithPublicIP *bool `json:"consumerImportSubnetRoutesWithPublicIp,omitempty"`
    ProducerExportCustomRoutes *bool `json:"producerExportCustomRoutes,omitempty"`
    ProducerExportSubnetRoutesWithPublicIP *bool `json:"producerExportSubnetRoutesWithPublicIp,omitempty"`
    ProducerImportCustomRoutes *bool `json:"producerImportCustomRoutes,omitempty"`
    ProducerImportSubnetRoutesWithPublicIP *bool `json:"producerImportSubnetRoutesWithPublicIp,omitempty"`
    ProducerNetwork *string `json:"producerNetwork,omitempty"`
    ReservedRanges []GoogleCloudServicenetworkingV1ConsumerConfigReservedRange `json:"reservedRanges,omitempty"`
    UsedIPRanges []string `json:"usedIpRanges,omitempty"`
    VpcScReferenceArchitectureEnabled *bool `json:"vpcScReferenceArchitectureEnabled,omitempty"`
    
}

