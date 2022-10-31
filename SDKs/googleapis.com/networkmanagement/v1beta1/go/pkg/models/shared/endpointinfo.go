package shared



type EndpointInfo struct {
    DestinationIP *string `json:"destinationIp,omitempty"`
    DestinationNetworkURI *string `json:"destinationNetworkUri,omitempty"`
    DestinationPort *int32 `json:"destinationPort,omitempty"`
    Protocol *string `json:"protocol,omitempty"`
    SourceAgentURI *string `json:"sourceAgentUri,omitempty"`
    SourceIP *string `json:"sourceIp,omitempty"`
    SourceNetworkURI *string `json:"sourceNetworkUri,omitempty"`
    SourcePort *int32 `json:"sourcePort,omitempty"`
    
}

