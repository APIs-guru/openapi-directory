import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionMock } from "./functionmock";
export declare enum TestCaseExpectationEnum {
    ExpectationUnspecified = "EXPECTATION_UNSPECIFIED",
    Allow = "ALLOW",
    Deny = "DENY"
}
export declare enum TestCaseExpressionReportLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED",
    None = "NONE",
    Full = "FULL",
    Visited = "VISITED"
}
export declare enum TestCasePathEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED",
    UrlEncoded = "URL_ENCODED",
    Plain = "PLAIN"
}
/**
 * `TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.
**/
export declare class TestCase extends SpeakeasyBase {
    expectation?: TestCaseExpectationEnum;
    expressionReportLevel?: TestCaseExpressionReportLevelEnum;
    functionMocks?: FunctionMock[];
    pathEncoding?: TestCasePathEncodingEnum;
    request?: any;
    resource?: any;
}
