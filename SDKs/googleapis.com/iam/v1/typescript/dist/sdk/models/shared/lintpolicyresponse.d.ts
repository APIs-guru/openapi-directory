import { SpeakeasyBase } from "../../../internal/utils";
import { LintResult } from "./lintresult";
/**
 * The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found.
**/
export declare class LintPolicyResponse extends SpeakeasyBase {
    lintResults?: LintResult[];
}
