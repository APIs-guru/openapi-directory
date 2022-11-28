package shared

// ClusterConfig
// The cluster config.
type ClusterConfig struct {
	AutoscalingConfig     *AutoscalingConfig         `json:"autoscalingConfig,omitempty"`
	ConfigBucket          *string                    `json:"configBucket,omitempty"`
	DataprocMetricConfig  *DataprocMetricConfig      `json:"dataprocMetricConfig,omitempty"`
	EncryptionConfig      *EncryptionConfig          `json:"encryptionConfig,omitempty"`
	EndpointConfig        *EndpointConfig            `json:"endpointConfig,omitempty"`
	GceClusterConfig      *GceClusterConfig          `json:"gceClusterConfig,omitempty"`
	GkeClusterConfig      *GkeClusterConfig          `json:"gkeClusterConfig,omitempty"`
	InitializationActions []NodeInitializationAction `json:"initializationActions,omitempty"`
	LifecycleConfig       *LifecycleConfig           `json:"lifecycleConfig,omitempty"`
	MasterConfig          *InstanceGroupConfig       `json:"masterConfig,omitempty"`
	MetastoreConfig       *MetastoreConfig           `json:"metastoreConfig,omitempty"`
	SecondaryWorkerConfig *InstanceGroupConfig       `json:"secondaryWorkerConfig,omitempty"`
	SecurityConfig        *SecurityConfig            `json:"securityConfig,omitempty"`
	SoftwareConfig        *SoftwareConfig            `json:"softwareConfig,omitempty"`
	TempBucket            *string                    `json:"tempBucket,omitempty"`
	WorkerConfig          *InstanceGroupConfig       `json:"workerConfig,omitempty"`
}

// ClusterConfigInput
// The cluster config.
type ClusterConfigInput struct {
	AutoscalingConfig     *AutoscalingConfig         `json:"autoscalingConfig,omitempty"`
	ConfigBucket          *string                    `json:"configBucket,omitempty"`
	DataprocMetricConfig  *DataprocMetricConfig      `json:"dataprocMetricConfig,omitempty"`
	EncryptionConfig      *EncryptionConfig          `json:"encryptionConfig,omitempty"`
	EndpointConfig        *EndpointConfigInput       `json:"endpointConfig,omitempty"`
	GceClusterConfig      *GceClusterConfig          `json:"gceClusterConfig,omitempty"`
	GkeClusterConfig      *GkeClusterConfig          `json:"gkeClusterConfig,omitempty"`
	InitializationActions []NodeInitializationAction `json:"initializationActions,omitempty"`
	LifecycleConfig       *LifecycleConfigInput      `json:"lifecycleConfig,omitempty"`
	MasterConfig          *InstanceGroupConfigInput  `json:"masterConfig,omitempty"`
	MetastoreConfig       *MetastoreConfig           `json:"metastoreConfig,omitempty"`
	SecondaryWorkerConfig *InstanceGroupConfigInput  `json:"secondaryWorkerConfig,omitempty"`
	SecurityConfig        *SecurityConfig            `json:"securityConfig,omitempty"`
	SoftwareConfig        *SoftwareConfig            `json:"softwareConfig,omitempty"`
	TempBucket            *string                    `json:"tempBucket,omitempty"`
	WorkerConfig          *InstanceGroupConfigInput  `json:"workerConfig,omitempty"`
}
