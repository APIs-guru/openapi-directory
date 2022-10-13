package shared

type EndpointInfo struct {
	DestinationIP         *string `json:"destinationIp"`
	DestinationNetworkURI *string `json:"destinationNetworkUri"`
	DestinationPort       *int32  `json:"destinationPort"`
	Protocol              *string `json:"protocol"`
	SourceIP              *string `json:"sourceIp"`
	SourceNetworkURI      *string `json:"sourceNetworkUri"`
	SourcePort            *int32  `json:"sourcePort"`
}
