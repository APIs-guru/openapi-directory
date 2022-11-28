import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Policy } from "./policy";



// PolicyInfo
/** 
 * The IAM policy and its attached resource.
**/
export class PolicyInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachedResource" })
  attachedResource?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: Policy;
}
