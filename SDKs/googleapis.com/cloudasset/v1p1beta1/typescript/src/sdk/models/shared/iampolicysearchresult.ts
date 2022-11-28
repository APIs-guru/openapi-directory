import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Explanation } from "./explanation";
import { Policy } from "./policy";



// IamPolicySearchResult
/** 
 * The result for an IAM policy search.
**/
export class IamPolicySearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=explanation" })
  explanation?: Explanation;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: Policy;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;
}
