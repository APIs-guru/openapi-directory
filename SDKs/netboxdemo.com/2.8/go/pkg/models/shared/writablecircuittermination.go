package shared

type WritableCircuitTerminationTermSideTerminationEnum string

const (
	WritableCircuitTerminationTermSideTerminationEnumA WritableCircuitTerminationTermSideTerminationEnum = "A"
	WritableCircuitTerminationTermSideTerminationEnumZ WritableCircuitTerminationTermSideTerminationEnum = "Z"
)

type WritableCircuitTermination struct {
	Cable                 *NestedCable                                      `json:"cable,omitempty"`
	Circuit               int64                                             `json:"circuit"`
	ConnectedEndpoint     map[string]string                                 `json:"connected_endpoint,omitempty"`
	ConnectedEndpointType *string                                           `json:"connected_endpoint_type,omitempty"`
	ConnectionStatus      *bool                                             `json:"connection_status,omitempty"`
	Description           *string                                           `json:"description,omitempty"`
	ID                    *int64                                            `json:"id,omitempty"`
	PortSpeed             int64                                             `json:"port_speed"`
	PpInfo                *string                                           `json:"pp_info,omitempty"`
	Site                  int64                                             `json:"site"`
	TermSide              WritableCircuitTerminationTermSideTerminationEnum `json:"term_side"`
	UpstreamSpeed         *int64                                            `json:"upstream_speed,omitempty"`
	XconnectID            *string                                           `json:"xconnect_id,omitempty"`
}
