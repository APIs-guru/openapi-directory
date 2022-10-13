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
	Error      *Status                        `json:"error"`
	Result     *ReachabilityDetailsResultEnum `json:"result"`
	Traces     []Trace                        `json:"traces"`
	VerifyTime *string                        `json:"verifyTime"`
}
