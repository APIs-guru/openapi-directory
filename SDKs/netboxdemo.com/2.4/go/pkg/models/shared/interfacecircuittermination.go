package shared

type InterfaceCircuitTerminationTermSideTerminationEnum string

const (
	InterfaceCircuitTerminationTermSideTerminationEnumA InterfaceCircuitTerminationTermSideTerminationEnum = "A"
	InterfaceCircuitTerminationTermSideTerminationEnumZ InterfaceCircuitTerminationTermSideTerminationEnum = "Z"
)

type InterfaceCircuitTermination struct {
	Circuit       *InterfaceNestedCircuit                            `json:"circuit"`
	ID            *int64                                             `json:"id"`
	PortSpeed     int64                                              `json:"port_speed"`
	PpInfo        *string                                            `json:"pp_info"`
	TermSide      InterfaceCircuitTerminationTermSideTerminationEnum `json:"term_side"`
	UpstreamSpeed *int64                                             `json:"upstream_speed"`
	XconnectID    *string                                            `json:"xconnect_id"`
}
