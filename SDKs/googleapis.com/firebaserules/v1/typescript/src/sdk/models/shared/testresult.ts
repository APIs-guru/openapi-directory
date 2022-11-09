import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourcePosition } from "./sourceposition";
import { ExpressionReport } from "./expressionreport";
import { FunctionCall } from "./functioncall";
import { VisitedExpression } from "./visitedexpression";

export enum TestResultStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Success = "SUCCESS"
,    Failure = "FAILURE"
}


// TestResult
/** 
 * Test result message containing the state of the test as well as a description and source position for test failures.
**/
export class TestResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=debugMessages" })
  debugMessages?: string[];

  @Metadata({ data: "json, name=errorPosition" })
  errorPosition?: SourcePosition;

  @Metadata({ data: "json, name=expressionReports", elemType: shared.ExpressionReport })
  expressionReports?: ExpressionReport[];

  @Metadata({ data: "json, name=functionCalls", elemType: shared.FunctionCall })
  functionCalls?: FunctionCall[];

  @Metadata({ data: "json, name=state" })
  state?: TestResultStateEnum;

  @Metadata({ data: "json, name=visitedExpressions", elemType: shared.VisitedExpression })
  visitedExpressions?: VisitedExpression[];
}
