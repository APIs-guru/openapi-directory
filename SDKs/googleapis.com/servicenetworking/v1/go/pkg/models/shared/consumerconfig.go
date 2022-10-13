package shared

type ConsumerConfig struct {
	CloudsqlConfigs                        []CloudSQLConfig                                            `json:"cloudsqlConfigs"`
	ConsumerExportCustomRoutes             *bool                                                       `json:"consumerExportCustomRoutes"`
	ConsumerExportSubnetRoutesWithPublicIP *bool                                                       `json:"consumerExportSubnetRoutesWithPublicIp"`
	ConsumerImportCustomRoutes             *bool                                                       `json:"consumerImportCustomRoutes"`
	ConsumerImportSubnetRoutesWithPublicIP *bool                                                       `json:"consumerImportSubnetRoutesWithPublicIp"`
	ProducerExportCustomRoutes             *bool                                                       `json:"producerExportCustomRoutes"`
	ProducerExportSubnetRoutesWithPublicIP *bool                                                       `json:"producerExportSubnetRoutesWithPublicIp"`
	ProducerImportCustomRoutes             *bool                                                       `json:"producerImportCustomRoutes"`
	ProducerImportSubnetRoutesWithPublicIP *bool                                                       `json:"producerImportSubnetRoutesWithPublicIp"`
	ProducerNetwork                        *string                                                     `json:"producerNetwork"`
	ReservedRanges                         []GoogleCloudServicenetworkingV1ConsumerConfigReservedRange `json:"reservedRanges"`
	UsedIPRanges                           []string                                                    `json:"usedIpRanges"`
	VpcScReferenceArchitectureEnabled      *bool                                                       `json:"vpcScReferenceArchitectureEnabled"`
}
