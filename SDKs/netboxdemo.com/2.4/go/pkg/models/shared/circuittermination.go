package shared

type CircuitTerminationTermSideTerminationEnum string

const (
	CircuitTerminationTermSideTerminationEnumA CircuitTerminationTermSideTerminationEnum = "A"
	CircuitTerminationTermSideTerminationEnumZ CircuitTerminationTermSideTerminationEnum = "Z"
)

type CircuitTermination struct {
	Circuit       NestedCircuit                             `json:"circuit"`
	ID            *int64                                    `json:"id"`
	Interface     *NestedInterface                          `json:"interface"`
	PortSpeed     int64                                     `json:"port_speed"`
	PpInfo        *string                                   `json:"pp_info"`
	Site          NestedSite                                `json:"site"`
	TermSide      CircuitTerminationTermSideTerminationEnum `json:"term_side"`
	UpstreamSpeed *int64                                    `json:"upstream_speed"`
	XconnectID    *string                                   `json:"xconnect_id"`
}
