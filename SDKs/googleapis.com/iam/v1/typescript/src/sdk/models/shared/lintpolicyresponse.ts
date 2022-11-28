import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LintResult } from "./lintresult";



// LintPolicyResponse
/** 
 * The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found.
**/
export class LintPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lintResults", elemType: LintResult })
  lintResults?: LintResult[];
}
