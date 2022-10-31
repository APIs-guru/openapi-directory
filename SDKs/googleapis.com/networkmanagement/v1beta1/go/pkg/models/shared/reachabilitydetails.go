package shared

type ReachabilityDetailsResultEnum string

const (
	ReachabilityDetailsResultEnumResultUnspecified ReachabilityDetailsResultEnum = "RESULT_UNSPECIFIED"
	ReachabilityDetailsResultEnumReachable         ReachabilityDetailsResultEnum = "REACHABLE"
	ReachabilityDetailsResultEnumUnreachable       ReachabilityDetailsResultEnum = "UNREACHABLE"
	ReachabilityDetailsResultEnumAmbiguous         ReachabilityDetailsResultEnum = "AMBIGUOUS"
	ReachabilityDetailsResultEnumUndetermined      ReachabilityDetailsResultEnum = "UNDETERMINED"
)

type ReachabilityDetails struct {
	Error      *Status                        `json:"error,omitempty"`
	Result     *ReachabilityDetailsResultEnum `json:"result,omitempty"`
	Traces     []Trace                        `json:"traces,omitempty"`
	VerifyTime *string                        `json:"verifyTime,omitempty"`
}
