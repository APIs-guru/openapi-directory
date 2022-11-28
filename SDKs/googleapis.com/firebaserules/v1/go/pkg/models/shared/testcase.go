package shared

type TestCaseExpectationEnum string

const (
	TestCaseExpectationEnumExpectationUnspecified TestCaseExpectationEnum = "EXPECTATION_UNSPECIFIED"
	TestCaseExpectationEnumAllow                  TestCaseExpectationEnum = "ALLOW"
	TestCaseExpectationEnumDeny                   TestCaseExpectationEnum = "DENY"
)

type TestCaseExpressionReportLevelEnum string

const (
	TestCaseExpressionReportLevelEnumLevelUnspecified TestCaseExpressionReportLevelEnum = "LEVEL_UNSPECIFIED"
	TestCaseExpressionReportLevelEnumNone             TestCaseExpressionReportLevelEnum = "NONE"
	TestCaseExpressionReportLevelEnumFull             TestCaseExpressionReportLevelEnum = "FULL"
	TestCaseExpressionReportLevelEnumVisited          TestCaseExpressionReportLevelEnum = "VISITED"
)

type TestCasePathEncodingEnum string

const (
	TestCasePathEncodingEnumEncodingUnspecified TestCasePathEncodingEnum = "ENCODING_UNSPECIFIED"
	TestCasePathEncodingEnumURLEncoded          TestCasePathEncodingEnum = "URL_ENCODED"
	TestCasePathEncodingEnumPlain               TestCasePathEncodingEnum = "PLAIN"
)

// TestCase
// `TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.
type TestCase struct {
	Expectation           *TestCaseExpectationEnum           `json:"expectation,omitempty"`
	ExpressionReportLevel *TestCaseExpressionReportLevelEnum `json:"expressionReportLevel,omitempty"`
	FunctionMocks         []FunctionMock                     `json:"functionMocks,omitempty"`
	PathEncoding          *TestCasePathEncodingEnum          `json:"pathEncoding,omitempty"`
	Request               *interface{}                       `json:"request,omitempty"`
	Resource              *interface{}                       `json:"resource,omitempty"`
}
