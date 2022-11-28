package shared

// ConsumerConfig
// Configuration information for a private service access connection.
type ConsumerConfig struct {
	CloudsqlConfigs                        []CloudSQLConfig                                            `json:"cloudsqlConfigs,omitempty"`
	ConsumerExportCustomRoutes             *bool                                                       `json:"consumerExportCustomRoutes,omitempty"`
	ConsumerExportSubnetRoutesWithPublicIP *bool                                                       `json:"consumerExportSubnetRoutesWithPublicIp,omitempty"`
	ConsumerImportCustomRoutes             *bool                                                       `json:"consumerImportCustomRoutes,omitempty"`
	ConsumerImportSubnetRoutesWithPublicIP *bool                                                       `json:"consumerImportSubnetRoutesWithPublicIp,omitempty"`
	ProducerExportCustomRoutes             *bool                                                       `json:"producerExportCustomRoutes,omitempty"`
	ProducerExportSubnetRoutesWithPublicIP *bool                                                       `json:"producerExportSubnetRoutesWithPublicIp,omitempty"`
	ProducerImportCustomRoutes             *bool                                                       `json:"producerImportCustomRoutes,omitempty"`
	ProducerImportSubnetRoutesWithPublicIP *bool                                                       `json:"producerImportSubnetRoutesWithPublicIp,omitempty"`
	ProducerNetwork                        *string                                                     `json:"producerNetwork,omitempty"`
	ReservedRanges                         []GoogleCloudServicenetworkingV1ConsumerConfigReservedRange `json:"reservedRanges,omitempty"`
	UsedIPRanges                           []string                                                    `json:"usedIpRanges,omitempty"`
	VpcScReferenceArchitectureEnabled      *bool                                                       `json:"vpcScReferenceArchitectureEnabled,omitempty"`
}

// ConsumerConfigInput
// Configuration information for a private service access connection.
type ConsumerConfigInput struct {
	CloudsqlConfigs                        []CloudSQLConfig `json:"cloudsqlConfigs,omitempty"`
	ConsumerExportCustomRoutes             *bool            `json:"consumerExportCustomRoutes,omitempty"`
	ConsumerExportSubnetRoutesWithPublicIP *bool            `json:"consumerExportSubnetRoutesWithPublicIp,omitempty"`
	ConsumerImportCustomRoutes             *bool            `json:"consumerImportCustomRoutes,omitempty"`
	ConsumerImportSubnetRoutesWithPublicIP *bool            `json:"consumerImportSubnetRoutesWithPublicIp,omitempty"`
	ProducerExportCustomRoutes             *bool            `json:"producerExportCustomRoutes,omitempty"`
	ProducerExportSubnetRoutesWithPublicIP *bool            `json:"producerExportSubnetRoutesWithPublicIp,omitempty"`
	ProducerImportCustomRoutes             *bool            `json:"producerImportCustomRoutes,omitempty"`
	ProducerImportSubnetRoutesWithPublicIP *bool            `json:"producerImportSubnetRoutesWithPublicIp,omitempty"`
}
