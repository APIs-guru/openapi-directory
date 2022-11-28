package shared

type WritableCircuitTerminationTerminationEnum string

const (
	WritableCircuitTerminationTerminationEnumA WritableCircuitTerminationTerminationEnum = "A"
	WritableCircuitTerminationTerminationEnumZ WritableCircuitTerminationTerminationEnum = "Z"
)

type WritableCircuitTerminationInput struct {
	Circuit       int64                                     `json:"circuit"`
	Interface     *int64                                    `json:"interface,omitempty"`
	PortSpeed     int64                                     `json:"port_speed"`
	PpInfo        *string                                   `json:"pp_info,omitempty"`
	Site          int64                                     `json:"site"`
	TermSide      WritableCircuitTerminationTerminationEnum `json:"term_side"`
	UpstreamSpeed *int64                                    `json:"upstream_speed,omitempty"`
	XconnectID    *string                                   `json:"xconnect_id,omitempty"`
}
