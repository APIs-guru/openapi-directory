package shared

type InterfaceCircuitTerminationTerminationEnum string

const (
	InterfaceCircuitTerminationTerminationEnumA InterfaceCircuitTerminationTerminationEnum = "A"
	InterfaceCircuitTerminationTerminationEnumZ InterfaceCircuitTerminationTerminationEnum = "Z"
)

type InterfaceCircuitTermination struct {
	Circuit       *InterfaceNestedCircuit                    `json:"circuit,omitempty"`
	ID            *int64                                     `json:"id,omitempty"`
	PortSpeed     int64                                      `json:"port_speed"`
	PpInfo        *string                                    `json:"pp_info,omitempty"`
	TermSide      InterfaceCircuitTerminationTerminationEnum `json:"term_side"`
	UpstreamSpeed *int64                                     `json:"upstream_speed,omitempty"`
	XconnectID    *string                                    `json:"xconnect_id,omitempty"`
}
