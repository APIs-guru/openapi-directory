import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";
import { ExpressionReport } from "./expressionreport";
import { FunctionCall } from "./functioncall";
import { VisitedExpression } from "./visitedexpression";


export enum TestResultStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Success = "SUCCESS",
    Failure = "FAILURE"
}


// TestResult
/** 
 * Test result message containing the state of the test as well as a description and source position for test failures.
**/
export class TestResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=debugMessages" })
  debugMessages?: string[];

  @SpeakeasyMetadata({ data: "json, name=errorPosition" })
  errorPosition?: SourcePosition;

  @SpeakeasyMetadata({ data: "json, name=expressionReports", elemType: ExpressionReport })
  expressionReports?: ExpressionReport[];

  @SpeakeasyMetadata({ data: "json, name=functionCalls", elemType: FunctionCall })
  functionCalls?: FunctionCall[];

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TestResultStateEnum;

  @SpeakeasyMetadata({ data: "json, name=visitedExpressions", elemType: VisitedExpression })
  visitedExpressions?: VisitedExpression[];
}
