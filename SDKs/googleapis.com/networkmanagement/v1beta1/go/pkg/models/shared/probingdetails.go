package shared

type ProbingDetailsAbortCauseEnum string

const (
	ProbingDetailsAbortCauseEnumProbingAbortCauseUnspecified ProbingDetailsAbortCauseEnum = "PROBING_ABORT_CAUSE_UNSPECIFIED"
	ProbingDetailsAbortCauseEnumPermissionDenied             ProbingDetailsAbortCauseEnum = "PERMISSION_DENIED"
	ProbingDetailsAbortCauseEnumNoSourceLocation             ProbingDetailsAbortCauseEnum = "NO_SOURCE_LOCATION"
)

type ProbingDetailsResultEnum string

const (
	ProbingDetailsResultEnumProbingResultUnspecified ProbingDetailsResultEnum = "PROBING_RESULT_UNSPECIFIED"
	ProbingDetailsResultEnumReachable                ProbingDetailsResultEnum = "REACHABLE"
	ProbingDetailsResultEnumUnreachable              ProbingDetailsResultEnum = "UNREACHABLE"
	ProbingDetailsResultEnumReachabilityInconsistent ProbingDetailsResultEnum = "REACHABILITY_INCONSISTENT"
	ProbingDetailsResultEnumUndetermined             ProbingDetailsResultEnum = "UNDETERMINED"
)

type ProbingDetails struct {
	AbortCause                *ProbingDetailsAbortCauseEnum `json:"abortCause,omitempty"`
	DestinationEgressLocation *EdgeLocation                 `json:"destinationEgressLocation,omitempty"`
	EndpointInfo              *EndpointInfo                 `json:"endpointInfo,omitempty"`
	Error                     *Status                       `json:"error,omitempty"`
	ProbingLatency            *LatencyDistribution          `json:"probingLatency,omitempty"`
	Result                    *ProbingDetailsResultEnum     `json:"result,omitempty"`
	SentProbeCount            *int32                        `json:"sentProbeCount,omitempty"`
	SuccessfulProbeCount      *int32                        `json:"successfulProbeCount,omitempty"`
	VerifyTime                *string                       `json:"verifyTime,omitempty"`
}
