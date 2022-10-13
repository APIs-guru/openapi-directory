package shared

type CircuitTerminationConnectionStatusLabelEnum string

const (
	CircuitTerminationConnectionStatusLabelEnumNotConnected CircuitTerminationConnectionStatusLabelEnum = "Not Connected"
	CircuitTerminationConnectionStatusLabelEnumConnected    CircuitTerminationConnectionStatusLabelEnum = "Connected"
)

type CircuitTerminationConnectionStatusConnectionStatus struct {
	Label CircuitTerminationConnectionStatusLabelEnum `json:"label"`
	Value bool                                        `json:"value"`
}

type CircuitTerminationTermSideTerminationEnum string

const (
	CircuitTerminationTermSideTerminationEnumA CircuitTerminationTermSideTerminationEnum = "A"
	CircuitTerminationTermSideTerminationEnumZ CircuitTerminationTermSideTerminationEnum = "Z"
)

type CircuitTermination struct {
	Cable                 *NestedCable                                        `json:"cable"`
	Circuit               NestedCircuit                                       `json:"circuit"`
	ConnectedEndpoint     map[string]string                                   `json:"connected_endpoint"`
	ConnectedEndpointType *string                                             `json:"connected_endpoint_type"`
	ConnectionStatus      *CircuitTerminationConnectionStatusConnectionStatus `json:"connection_status"`
	Description           *string                                             `json:"description"`
	ID                    *int64                                              `json:"id"`
	PortSpeed             int64                                               `json:"port_speed"`
	PpInfo                *string                                             `json:"pp_info"`
	Site                  NestedSite                                          `json:"site"`
	TermSide              CircuitTerminationTermSideTerminationEnum           `json:"term_side"`
	UpstreamSpeed         *int64                                              `json:"upstream_speed"`
	XconnectID            *string                                             `json:"xconnect_id"`
}
