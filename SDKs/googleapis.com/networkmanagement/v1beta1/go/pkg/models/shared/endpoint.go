package shared

type EndpointNetworkTypeEnum string

const (
	EndpointNetworkTypeEnumNetworkTypeUnspecified EndpointNetworkTypeEnum = "NETWORK_TYPE_UNSPECIFIED"
	EndpointNetworkTypeEnumGcpNetwork             EndpointNetworkTypeEnum = "GCP_NETWORK"
	EndpointNetworkTypeEnumNonGcpNetwork          EndpointNetworkTypeEnum = "NON_GCP_NETWORK"
)

type Endpoint struct {
	CloudFunction    *CloudFunctionEndpoint   `json:"cloudFunction,omitempty"`
	CloudSQLInstance *string                  `json:"cloudSqlInstance,omitempty"`
	GkeMasterCluster *string                  `json:"gkeMasterCluster,omitempty"`
	Instance         *string                  `json:"instance,omitempty"`
	IPAddress        *string                  `json:"ipAddress,omitempty"`
	Network          *string                  `json:"network,omitempty"`
	NetworkType      *EndpointNetworkTypeEnum `json:"networkType,omitempty"`
	Port             *int32                   `json:"port,omitempty"`
	ProjectID        *string                  `json:"projectId,omitempty"`
}
