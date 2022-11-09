import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Explanation } from "./explanation";
import { Policy } from "./policy";


// IamPolicySearchResult
/** 
 * The result for an IAM policy search.
**/
export class IamPolicySearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=explanation" })
  explanation?: Explanation;

  @Metadata({ data: "json, name=policy" })
  policy?: Policy;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;
}
