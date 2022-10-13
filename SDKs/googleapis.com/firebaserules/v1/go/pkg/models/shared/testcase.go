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

type TestCase struct {
	Expectation           *TestCaseExpectationEnum           `json:"expectation"`
	ExpressionReportLevel *TestCaseExpressionReportLevelEnum `json:"expressionReportLevel"`
	FunctionMocks         []FunctionMock                     `json:"functionMocks"`
	PathEncoding          *TestCasePathEncodingEnum          `json:"pathEncoding"`
	Request               *interface{}                       `json:"request"`
	Resource              *interface{}                       `json:"resource"`
}
