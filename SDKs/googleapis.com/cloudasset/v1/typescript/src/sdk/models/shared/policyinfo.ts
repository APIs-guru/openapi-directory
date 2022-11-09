import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Policy } from "./policy";


// PolicyInfo
/** 
 * The IAM policy and its attached resource.
**/
export class PolicyInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachedResource" })
  attachedResource?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: Policy;
}
