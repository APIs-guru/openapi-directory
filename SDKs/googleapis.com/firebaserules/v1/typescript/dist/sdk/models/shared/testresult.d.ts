import { SpeakeasyBase } from "../../../internal/utils";
import { SourcePosition } from "./sourceposition";
import { ExpressionReport } from "./expressionreport";
import { FunctionCall } from "./functioncall";
import { VisitedExpression } from "./visitedexpression";
export declare enum TestResultStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Success = "SUCCESS",
    Failure = "FAILURE"
}
/**
 * Test result message containing the state of the test as well as a description and source position for test failures.
**/
export declare class TestResult extends SpeakeasyBase {
    debugMessages?: string[];
    errorPosition?: SourcePosition;
    expressionReports?: ExpressionReport[];
    functionCalls?: FunctionCall[];
    state?: TestResultStateEnum;
    visitedExpressions?: VisitedExpression[];
}
