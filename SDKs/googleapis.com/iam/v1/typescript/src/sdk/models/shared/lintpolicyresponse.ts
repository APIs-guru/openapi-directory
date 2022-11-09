import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LintResult } from "./lintresult";


// LintPolicyResponse
/** 
 * The response of a lint operation. An empty response indicates the operation was able to fully execute and no lint issue was found.
**/
export class LintPolicyResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=lintResults", elemType: shared.LintResult })
  lintResults?: LintResult[];
}
