import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FunctionMock } from "./functionmock";

export enum TestCaseExpectationEnum {
    ExpectationUnspecified = "EXPECTATION_UNSPECIFIED"
,    Allow = "ALLOW"
,    Deny = "DENY"
}

export enum TestCaseExpressionReportLevelEnum {
    LevelUnspecified = "LEVEL_UNSPECIFIED"
,    None = "NONE"
,    Full = "FULL"
,    Visited = "VISITED"
}

export enum TestCasePathEncodingEnum {
    EncodingUnspecified = "ENCODING_UNSPECIFIED"
,    UrlEncoded = "URL_ENCODED"
,    Plain = "PLAIN"
}


// TestCase
/** 
 * `TestCase` messages provide the request context and an expectation as to whether the given context will be allowed or denied. Test cases may specify the `request`, `resource`, and `function_mocks` to mock a function call to a service-provided function. The `request` object represents context present at request-time. The `resource` is the value of the target resource as it appears in persistent storage before the request is executed.
**/
export class TestCase extends SpeakeasyBase {
  @Metadata({ data: "json, name=expectation" })
  expectation?: TestCaseExpectationEnum;

  @Metadata({ data: "json, name=expressionReportLevel" })
  expressionReportLevel?: TestCaseExpressionReportLevelEnum;

  @Metadata({ data: "json, name=functionMocks", elemType: shared.FunctionMock })
  functionMocks?: FunctionMock[];

  @Metadata({ data: "json, name=pathEncoding" })
  pathEncoding?: TestCasePathEncodingEnum;

  @Metadata({ data: "json, name=request" })
  request?: any;

  @Metadata({ data: "json, name=resource" })
  resource?: any;
}
