package shared

type ClusterConfig struct {
	AutoscalingConfig     *AutoscalingConfig         `json:"autoscalingConfig"`
	ConfigBucket          *string                    `json:"configBucket"`
	DataprocMetricConfig  *DataprocMetricConfig      `json:"dataprocMetricConfig"`
	EncryptionConfig      *EncryptionConfig          `json:"encryptionConfig"`
	EndpointConfig        *EndpointConfig            `json:"endpointConfig"`
	GceClusterConfig      *GceClusterConfig          `json:"gceClusterConfig"`
	GkeClusterConfig      *GkeClusterConfig          `json:"gkeClusterConfig"`
	InitializationActions []NodeInitializationAction `json:"initializationActions"`
	LifecycleConfig       *LifecycleConfig           `json:"lifecycleConfig"`
	MasterConfig          *InstanceGroupConfig       `json:"masterConfig"`
	MetastoreConfig       *MetastoreConfig           `json:"metastoreConfig"`
	SecondaryWorkerConfig *InstanceGroupConfig       `json:"secondaryWorkerConfig"`
	SecurityConfig        *SecurityConfig            `json:"securityConfig"`
	SoftwareConfig        *SoftwareConfig            `json:"softwareConfig"`
	TempBucket            *string                    `json:"tempBucket"`
	WorkerConfig          *InstanceGroupConfig       `json:"workerConfig"`
}
