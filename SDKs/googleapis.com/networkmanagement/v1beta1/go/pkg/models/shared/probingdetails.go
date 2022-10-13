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
	AbortCause                *ProbingDetailsAbortCauseEnum `json:"abortCause"`
	DestinationEgressLocation *EdgeLocation                 `json:"destinationEgressLocation"`
	EndpointInfo              *EndpointInfo                 `json:"endpointInfo"`
	Error                     *Status                       `json:"error"`
	ProbingLatency            *LatencyDistribution          `json:"probingLatency"`
	Result                    *ProbingDetailsResultEnum     `json:"result"`
	SentProbeCount            *int32                        `json:"sentProbeCount"`
	SuccessfulProbeCount      *int32                        `json:"successfulProbeCount"`
	VerifyTime                *string                       `json:"verifyTime"`
}
