package shared

type EndpointNetworkTypeEnum string

const (
	EndpointNetworkTypeEnumNetworkTypeUnspecified EndpointNetworkTypeEnum = "NETWORK_TYPE_UNSPECIFIED"
	EndpointNetworkTypeEnumGcpNetwork             EndpointNetworkTypeEnum = "GCP_NETWORK"
	EndpointNetworkTypeEnumNonGcpNetwork          EndpointNetworkTypeEnum = "NON_GCP_NETWORK"
)

type Endpoint struct {
	CloudFunction    *CloudFunctionEndpoint   `json:"cloudFunction"`
	CloudSQLInstance *string                  `json:"cloudSqlInstance"`
	GkeMasterCluster *string                  `json:"gkeMasterCluster"`
	Instance         *string                  `json:"instance"`
	IPAddress        *string                  `json:"ipAddress"`
	Network          *string                  `json:"network"`
	NetworkType      *EndpointNetworkTypeEnum `json:"networkType"`
	Port             *int32                   `json:"port"`
	ProjectID        *string                  `json:"projectId"`
}
