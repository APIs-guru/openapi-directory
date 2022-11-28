package shared

type ReachabilityDetailsResultEnum string

const (
	ReachabilityDetailsResultEnumResultUnspecified ReachabilityDetailsResultEnum = "RESULT_UNSPECIFIED"
	ReachabilityDetailsResultEnumReachable         ReachabilityDetailsResultEnum = "REACHABLE"
	ReachabilityDetailsResultEnumUnreachable       ReachabilityDetailsResultEnum = "UNREACHABLE"
	ReachabilityDetailsResultEnumAmbiguous         ReachabilityDetailsResultEnum = "AMBIGUOUS"
	ReachabilityDetailsResultEnumUndetermined      ReachabilityDetailsResultEnum = "UNDETERMINED"
)

// ReachabilityDetails
// Results of the configuration analysis from the last run of the test.
type ReachabilityDetails struct {
	Error      *Status                        `json:"error,omitempty"`
	Result     *ReachabilityDetailsResultEnum `json:"result,omitempty"`
	Traces     []Trace                        `json:"traces,omitempty"`
	VerifyTime *string                        `json:"verifyTime,omitempty"`
}
