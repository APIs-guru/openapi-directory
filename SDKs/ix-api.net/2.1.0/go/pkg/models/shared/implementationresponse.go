package shared

type ImplementationResponse struct {
	SchemaVersion                      string   `json:"schema_version"`
	ServiceVersion                     *string  `json:"service_version,omitempty"`
	SupportedNetworkFeatureConfigTypes []string `json:"supported_network_feature_config_types"`
	SupportedNetworkFeatureTypes       []string `json:"supported_network_feature_types"`
	SupportedNetworkServiceConfigTypes []string `json:"supported_network_service_config_types"`
	SupportedNetworkServiceTypes       []string `json:"supported_network_service_types"`
	SupportedOperations                []string `json:"supported_operations"`
}
