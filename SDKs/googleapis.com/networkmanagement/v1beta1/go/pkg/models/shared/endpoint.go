package shared

type EndpointNetworkTypeEnum string

const (
	EndpointNetworkTypeEnumNetworkTypeUnspecified EndpointNetworkTypeEnum = "NETWORK_TYPE_UNSPECIFIED"
	EndpointNetworkTypeEnumGcpNetwork             EndpointNetworkTypeEnum = "GCP_NETWORK"
	EndpointNetworkTypeEnumNonGcpNetwork          EndpointNetworkTypeEnum = "NON_GCP_NETWORK"
)

// Endpoint
// Source or destination of the Connectivity Test.
type Endpoint struct {
	AppEngineVersion *AppEngineVersionEndpoint `json:"appEngineVersion,omitempty"`
	CloudFunction    *CloudFunctionEndpoint    `json:"cloudFunction,omitempty"`
	CloudRunRevision *CloudRunRevisionEndpoint `json:"cloudRunRevision,omitempty"`
	CloudSQLInstance *string                   `json:"cloudSqlInstance,omitempty"`
	GkeMasterCluster *string                   `json:"gkeMasterCluster,omitempty"`
	Instance         *string                   `json:"instance,omitempty"`
	IPAddress        *string                   `json:"ipAddress,omitempty"`
	Network          *string                   `json:"network,omitempty"`
	NetworkType      *EndpointNetworkTypeEnum  `json:"networkType,omitempty"`
	Port             *int32                    `json:"port,omitempty"`
	ProjectID        *string                   `json:"projectId,omitempty"`
}
