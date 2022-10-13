package shared

type WritableCircuitTerminationTermSideTerminationEnum string

const (
	WritableCircuitTerminationTermSideTerminationEnumA WritableCircuitTerminationTermSideTerminationEnum = "A"
	WritableCircuitTerminationTermSideTerminationEnumZ WritableCircuitTerminationTermSideTerminationEnum = "Z"
)

type WritableCircuitTermination struct {
	Cable                 *NestedCable                                      `json:"cable"`
	Circuit               int64                                             `json:"circuit"`
	ConnectedEndpoint     map[string]string                                 `json:"connected_endpoint"`
	ConnectedEndpointType *string                                           `json:"connected_endpoint_type"`
	ConnectionStatus      *bool                                             `json:"connection_status"`
	Description           *string                                           `json:"description"`
	ID                    *int64                                            `json:"id"`
	PortSpeed             int64                                             `json:"port_speed"`
	PpInfo                *string                                           `json:"pp_info"`
	Site                  int64                                             `json:"site"`
	TermSide              WritableCircuitTerminationTermSideTerminationEnum `json:"term_side"`
	UpstreamSpeed         *int64                                            `json:"upstream_speed"`
	XconnectID            *string                                           `json:"xconnect_id"`
}
